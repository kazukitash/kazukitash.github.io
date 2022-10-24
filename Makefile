#!/usr/bin/make

SHELL = /bin/sh

up:
	UID_GID="$(shell id -u):$(shell id -g)" docker-compose up --force-recreate

all: up
