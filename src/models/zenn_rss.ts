import { blog } from "@/models/blog";
import { XMLParser } from "fast-xml-parser";
import { retryAsync } from "ts-retry";

export default class ZennRSS {
  url: string;
  xmlParser: XMLParser;

  constructor() {
    this.url = "https://zenn.dev/kazukitash/feed";
    this.xmlParser = new XMLParser();
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるので+1する
    const day = (date.getUTCDate() + 1).toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  private async parse(response: Response): Promise<blog[]> {
    const xmlText = await response.text();
    const xmlObject = this.xmlParser.parse(xmlText);
    const blogs = xmlObject.rss.channel.item.map((item: any) => ({
      key: item.guid,
      date: this.formatDate(item.pubDate),
      title: item.title,
      link: item.link,
    }));

    return blogs;
  }

  async fetch(): Promise<blog[]> {
    let blogs: blog[] = [];
    try {
      const response = await retryAsync(
        async () => {
          return await fetch(this.url);
        },
        { delay: 100, maxTry: 3 }
      );
      if (response.status !== 200) {
        throw new Error();
      }

      blogs = await this.parse(response);
    } catch (error) {
      console.error("Failed fetch Zenn RSS.");
    }

    return blogs;
  }
}
