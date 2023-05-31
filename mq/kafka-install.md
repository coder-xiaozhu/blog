# Kafka安装、部署、测试

## 下载

[Kafka下载](https://archive.apache.org/dist/kafka/)

&emsp;&emsp;自行选择版本,本文以3.2.0版本为例，且不使用zookeeper，前面的2.12以及2.13表示scala的版本，后面的3.2.0表示kafka的版本

## 部署

- **解压下载下来的压缩包**

  `tar -zxvf kafka_2.12-3.2.0.tgz`

<details>
<summary> 如果使用zookeeper进行服务管理，则可跳过这段</summary>

1. 使用`kafka-storage`脚本为集群生成一个id，这个id将在同一个集群中所有实例使用
`./bin/kafka-storage.sh random-uuid`  
2. 格式化存储目录 **（注意：如果使用kraft做服务管理的话就要使用config目录下的kraft目录下的`server.properties`配置文件）**
`./bin/kafka-storage.sh format -t <uuid> -c ./config/kraft/server.properties`
3. 如果有多实例，则需要都操作一遍步骤1和步骤2，可自行编写脚本进行处理

</details>
 

- **启动KafkaServer,`-daemon` 表示在后台启动，不加此参数KafkaServer将在控制台关闭的时候停止**
  `bin/kafka-server-start.sh <-daemon>  config/kraft/server.properties`

## 测试

1. 创建一个topic（下面指令将创建一个 topic 名称为 `foo`，分区数(`partitions`)为1，副本数(`replication-factor`)为2）
   `bin/kafka-topics.sh --create --topic foo --partitions 1 --replication-factor 2 --bootstrap-server ip:port`
2. 启动消息消费者，用于测试消息是否能成功接收（通过下面的指令启动的控制台消费者将监听topic名称为 `foo`的主题）
   `bin/kafka-console-consumer.sh --bootstrap-server ip:port --topic foo`
3. 启动消息生产者，配合消息消费者测试消息是否能成功发送（通过下面的指令启动的控制台生产者将向topic名称为 `foo`的主题发送消息）
   `bin/kafka-console-producer.sh --bootstrap-server ip:port --topic foo`
