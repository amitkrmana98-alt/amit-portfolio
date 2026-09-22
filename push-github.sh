#!/usr/bin/env bash

git remote add origin https://github.com/amitkrmana98-alt/amit-portfolio.git 2>/dev/null || git remote set-url origin https://github.com/amitkrmana98-alt/amit-portfolio.git
git branch -M main
git push -u origin main
