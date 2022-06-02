# Million more test suite

## Docker container
**Docker image is uploaded to docker hub**

### How to run?

**docker run -p 54015:54015 --shm-size="2g" -it sarjaarjun/million-more:million-more-test**

### Check the result
**On your machine, open browser and go to http://127.0.0.1:54015**

### Script location
**Login to docker container with -- docker run -p 54015:54015 --shm-size="2g" -it sarjaarjun/million-more:million-more-test /bin/bash**

**cd /app/test/specs folder in docker container**

### Sample output at the end of the docker run
>Spec Files:	 15 passed, 15 total (100% completed) in 00:04:37

>2022-05-31T11:40:22.546Z INFO @wdio/local-runner: Shutting down spawned worker

>2022-05-31T11:40:22.807Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully

>2022-05-31T11:40:22.809Z INFO @wdio/local-runner: shutting down
 
> webdriverio-tests@0.1.0 generateReport /app

> allure generate allure-results --clean && allure open -p 54015

>Report successfully generated to allure-report

>Starting web server...
2022-05-31 11:40:28.622:INFO::main: Logging initialized @357ms to org.eclipse.jetty.util.log.StdErrLog

>Can not open browser because this capability is not supported on your platform. You can use the link below to open the report manually.
Server started at <http://172.17.0.2:54015/>. Press <Ctrl+C> to exit`


## Visual Regression Testing
**Test spec at /app/test/specs/imageComparison.js**

## Kubernetes solution
**Yaml and wdio runner file at /app/selenium-grid**

## Minikube cluster details
>sarjaarjun@Sarjas-MacBook-Pro ~/volvo_project> kgp

|NAME                                           |READY  |STATUS   |RESTARTS    | AGE|
|-----------------------------------------------|-------|---------|------------|----|

|selenium-hub-deployment-648b5d47fb-64mc6       |    1/1|  Running|   0        | 3m16s|

|selenium-node-chrome-deployment-568474d4f6-879dp |  1/1   |  Running |  0     |    91s

>sarjaarjun@Sarjas-MacBook-Pro ~/volvo_project> kgs
|NAME                  |TYPE      | CLUSTER-IP    |  EXTERNAL-IP  |PORT(S)        | AGE |
|----------------------|----------|---------------|---------------|---------------|-----|
|kubernetes            | ClusterIP|  10.96.0.1    |     <none>    |    443/TCP    | 144m|
|selenium-hub          | NodePort |  10.104.129.58|    <none>     |4444:30001/TCP |  3m36s|
|selenium-node-chrome  | ClusterIP| 10.104.122.255|   <none>      |  5555/TCP    |  3m24s|

>sarjaarjun@Sarjas-MacBook-Pro ~/volvo_project> minikube service selenium-hub --url

>http://192.168.59.100:30001


## Sample output where hub is accessed during the run
>[0-0] 2022-06-01T05:51:43.768Z INFO webdriver: COMMAND elementClick("3fa44d32-ee55-4406-8841-4e0475130cee")

>[0-0] 2022-06-01T05:51:43.768Z INFO webdriver: [POST] http://192.168.59.100:30001/wd/hub/session/3d3ecad48942bed250a553b4f353cf48/element/3fa44d32-ee55-4406-8841-4e0475130cee/click

>[0-0] 2022-06-01T05:51:49.542Z INFO webdriver: COMMAND getUrl()

>[0-0] 2022-06-01T05:51:49.542Z INFO webdriver: [GET] http://192.168.59.100:30001/wd/hub/session/3d3ecad48942bed250a553b4f353cf48/url

>[0-0] 2022-06-01T05:51:49.659Z INFO webdriver: RESULT https://www.volvocars.com/intl

>[0-0] 2022-06-01T05:51:49.669Z INFO webdriver: COMMAND deleteSession()

>[0-0] 2022-06-01T05:51:49.669Z INFO webdriver: [DELETE] http://192.168.59.100:30001/wd/hub/session/3d3ecad48942bed250a553b4f353cf48

>[0-0] PASSED in chrome - /test/specs/home.js

>2022-06-01T05:51:49.950Z INFO @wdio/cli:launcher: Run onWorkerEnd hook

>2022-06-01T05:51:49.950Z INFO @wdio/cli:launcher: Run onComplete hook




