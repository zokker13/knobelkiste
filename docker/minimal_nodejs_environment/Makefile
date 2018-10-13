#
# Makefile
# phil, 2018-10-13 11:31
#

build:
	@docker build -t minimal_nodejs_environment .

run:
	@docker run --name minimal_nodejs_environment -p17000:80 -d minimal_nodejs_environment

destroy:
	@docker kill minimal_nodejs_environment

