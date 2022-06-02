#!/bin/bash
npx wdio
allure generate allure-results --clean && allure open -p 54015
