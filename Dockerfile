FROM ianwalter/puppeteer:latest 

WORKDIR /app
ADD . /app

RUN apt-get update && \
    apt-get install -y openjdk-11-jdk &&  \
    apt-get clean;

RUN npm install

RUN wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_101.0.4951.64-1_amd64.deb \
  && apt install -y /tmp/chrome.deb \
  && rm /tmp/chrome.deb

RUN npm install -g allure-commandline

RUN apt-get -y install vim

# CMD npx wdio; allure generate allure-results --clean && allure open -p 54015
CMD npm run testMillionMore; npm run generateReport