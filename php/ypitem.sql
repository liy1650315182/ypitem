/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : ypitem

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-10-15 17:29:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner_lunbo`
-- ----------------------------
DROP TABLE IF EXISTS `banner_lunbo`;
CREATE TABLE `banner_lunbo` (
  `sid` tinyint(1) NOT NULL,
  `url` varchar(99) NOT NULL,
  `color` varchar(40) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_lunbo
-- ----------------------------
INSERT INTO `banner_lunbo` VALUES ('1', 'https://img.ingping.com/images/ad_images/201810/201810081117230036431.jpg', 'rgb(223, 0, 77)', '金秋国庆狂欢周  满减劲省 --- 满1000-50元 | 满3000-150元 | 满5000-250元 | 满10000-500元');
INSERT INTO `banner_lunbo` VALUES ('2', 'https://img.ingping.com/images/ad_images/201809/201809291153000346316.jpg', 'rgb(255, 128, 251)', '手机K歌设备   全场满减  --- 满1000-50元    满3000-150元');
INSERT INTO `banner_lunbo` VALUES ('3', 'https://img.ingping.com/images/ad_images/201810/201810070904380924510.jpg', 'rgb(255, 134, 167)', '网络K歌设备  全场满减  --- 满1000-50元   满3000-150元\r\n\r\n\r\n网络K歌设备  全场满减  --- 满1000-50元   满3000-150元');
INSERT INTO `banner_lunbo` VALUES ('4', 'https://img.ingping.com/images/ad_images/201809/201809272200090411592.jpg', 'rgb(92, 225, 204)', '录音编曲设备 全场满减  ---  满3000减150元   满5000减250元\r\n\r\n\r\n录音编曲设备 全场满减  ---  满3000减150元   满5000减250元');
INSERT INTO `banner_lunbo` VALUES ('5', 'https://img.ingping.com/images/ad_images/201809/20180929115323049925.jpg', 'rgb(101, 210, 243)', '家庭KTV设备  全场满减  ---  满5000减250元  满10000减500元');
INSERT INTO `banner_lunbo` VALUES ('6', 'https://img.ingping.com/images/ad_images/201809/201809291153330651554.jpg', 'rgb(255, 160, 96)', '舞台演出设备  全场满减 ---  满3000-150元   满5000-250元');
INSERT INTO `banner_lunbo` VALUES ('7', 'https://img.ingping.com/images/ad_images/201809/201809301759210773410.jpg', 'rgb(250, 117, 159)', '小程序砍价---好货0元拿');

-- ----------------------------
-- Table structure for `brands`
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `sid` tinyint(1) NOT NULL,
  `url` varchar(99) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES ('1', 'https://img.ingping.com/images/brandlogo/L/201204021500350361697.gif');
INSERT INTO `brands` VALUES ('2', 'https://img.ingping.com/images/brandlogo/L/201204021447480113997.gif');
INSERT INTO `brands` VALUES ('3', 'https://img.ingping.com/images/brandlogo/L/201204021443100645594.gif');
INSERT INTO `brands` VALUES ('4', 'https://img.ingping.com/images/brandlogo/L/20120406153611079582.gif');
INSERT INTO `brands` VALUES ('5', 'https://img.ingping.com/images/brandlogo/L/201204021453490257722.gif');
INSERT INTO `brands` VALUES ('6', 'https://img.ingping.com/images/brandlogo/L/201703141800410023840.gif');
INSERT INTO `brands` VALUES ('7', 'https://img.ingping.com/images/brandlogo/L/201306151216260722653.jpg');
INSERT INTO `brands` VALUES ('8', 'https://img.ingping.com/images/brandlogo/L/201205211641320708609.gif');
INSERT INTO `brands` VALUES ('9', 'https://img.ingping.com/images/brandlogo/L/201204021459080170153.gif');
INSERT INTO `brands` VALUES ('10', 'https://img.ingping.com/images/brandlogo/L/201304151111520394125.gif');

-- ----------------------------
-- Table structure for `guesslove`
-- ----------------------------
DROP TABLE IF EXISTS `guesslove`;
CREATE TABLE `guesslove` (
  `sid` tinyint(1) NOT NULL,
  `guess_url` varchar(99) NOT NULL,
  `guess_name` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of guesslove
-- ----------------------------
INSERT INTO `guesslove` VALUES ('1', 'https://img.ingping.com/images/product/ML/20121/201201061057460703717.jpg', '纽曼(Neumann)德国进口 U87 Ai 电容式录音麦克风', '22999.00');
INSERT INTO `guesslove` VALUES ('2', 'https://img.ingping.com/images/product/ML/201111/201111251553380672984.jpg', '舒尔(SHURE)SM58s 动圈式出色人声话筒', '699.00');
INSERT INTO `guesslove` VALUES ('3', 'https://img.ingping.com/images/product/ML/201704/201704291512550649290.jpg', '艾肯(iCON)CUBE 4Nano VST电脑录音K歌外置声卡', '1499.00');
INSERT INTO `guesslove` VALUES ('4', 'https://img.ingping.com/images/product/ML/201704/201704121540080732416.jpg', '艾肯(iCON)MicU VST电脑K歌外置USB声卡', '999.00');
INSERT INTO `guesslove` VALUES ('5', 'https://img.ingping.com/images/product/ML/201303/201303011737530765950.jpg', 'RME德国进口 Fireface UCX 电脑专业录音K歌声卡', '8999.00');

-- ----------------------------
-- Table structure for `guesslove_1`
-- ----------------------------
DROP TABLE IF EXISTS `guesslove_1`;
CREATE TABLE `guesslove_1` (
  `sid` tinyint(1) NOT NULL,
  `guess_url` varchar(99) NOT NULL,
  `guess_name` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of guesslove_1
-- ----------------------------
INSERT INTO `guesslove_1` VALUES ('1', 'https://img.ingping.com/images/product/ML/201406/201406071801190293193.jpg', '雅马哈(YAMAHA)01V96I 数字录音调音台 16路数字调音台', '12999.00');
INSERT INTO `guesslove_1` VALUES ('2', 'https://img.ingping.com/images/product/ML/201408/201408131405590621489.jpg', '雅马哈(YAMAHA)MG12 12路模拟调音台', '1699.00');
INSERT INTO `guesslove_1` VALUES ('3', 'https://img.ingping.com/images/product/ML/201410/201410301416500536921.jpg', '铁三角(Audio-technica)AT2035 电容式录音麦克风（黑色）', '1299.00');
INSERT INTO `guesslove_1` VALUES ('4', 'https://img.ingping.com/images/product/ML/201412/201412081633420428878.jpg', '森海塞尔(Sennheiser)MK4 电容式录音麦克风 工作室/录音获奖产品', '2428.00');
INSERT INTO `guesslove_1` VALUES ('5', 'https://img.ingping.com/images/product/ML/201706/20170629155816088799.jpg', '雅马哈(steinberg)UR242 USB专业录音网络K歌声卡', '1618.00');

-- ----------------------------
-- Table structure for `left_pic`
-- ----------------------------
DROP TABLE IF EXISTS `left_pic`;
CREATE TABLE `left_pic` (
  `sid` tinyint(1) NOT NULL,
  `url` varchar(99) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of left_pic
-- ----------------------------
INSERT INTO `left_pic` VALUES ('1', 'https://img.ingping.com/images/ad_images/201809/201809281749530560928.jpg');
INSERT INTO `left_pic` VALUES ('2', 'https://img.ingping.com/images/ad_images/201810/201810101602280335429.jpg');
INSERT INTO `left_pic` VALUES ('3', 'https://img.ingping.com/images/ad_images/201810/201810102011520099428.jpg');
INSERT INTO `left_pic` VALUES ('4', 'https://img.ingping.com/images/ad_images/201809/20180928192402054680.jpg');
INSERT INTO `left_pic` VALUES ('5', 'https://img.ingping.com/images/ad_images/201809/201809011739180329706.jpg');
INSERT INTO `left_pic` VALUES ('6', 'https://img.ingping.com/images/ad_images/201705/201705111451520165521.jpg');

-- ----------------------------
-- Table structure for `middle_pic`
-- ----------------------------
DROP TABLE IF EXISTS `middle_pic`;
CREATE TABLE `middle_pic` (
  `sid` tinyint(1) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `url` varchar(9999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of middle_pic
-- ----------------------------
INSERT INTO `middle_pic` VALUES ('1', '性能强大 声音饱满清晰度高,高品质专业录音推荐,RME Babyface Pro声卡搭配森海塞尔MK4麦克风 单人录音套装', '9850.00', 'https://img.ingping.com/images/template/product/201810101617280240304.png,https://img.ingping.com/images/suit/B/20187/201807051003590043397.jpg,https://img.ingping.com/images/suit/B/201611/201611100955530986752.jpg,https://img.ingping.com/images/suit/B/201611/201611100955560681424.jpg,https://img.ingping.com/images/suit/B/20187/20180705100410078364.jpg,https://img.ingping.com/images/suit/B/201611/201611100955530986752.jpg,https://img.ingping.com/images/suit/B/201611/201611100955560681424.jpg,https://img.ingping.com/images/suit/B/20187/20180705100410078364.jpg');
INSERT INTO `middle_pic` VALUES ('2', '通道多 性能强 声音无失真,中小型录音室高配优选,RME Fireface UFX II录音声卡搭配莱维特LCT940麦克风 录音套装', '66635.00', 'https://img.ingping.com/images/template/product/201810101544250506954.png,https://img.ingping.com/images/suit/B/201810/201810101058530602153.jpg');
INSERT INTO `middle_pic` VALUES ('3', '颜值与实力并存,粉丝暴涨神器,艾肯MOBILE·U MINI声卡搭配得胜K850麦克风 电脑主播K歌喊麦声卡套装 YY繁星主播直播录音设备全套', '2974.00', 'https://img.ingping.com/images/template/product/201810101617060303797.png,https://img.ingping.com/images/suit/B/201810/201810081716130488962.jpg,https://img.ingping.com/images/suit/B/201810/201810081716180342287.jpg,https://img.ingping.com/images/suit/B/201810/201810081716200601659.jpg,https://img.ingping.com/images/suit/B/201810/201810081716220953637.jpg');
INSERT INTO `middle_pic` VALUES ('4', '性能稳定 高品质多音效,主播必备推荐套装,艾肯Upod Pro声卡搭配得胜K320麦克风 手机直播K歌声卡套装 抖音映客主播直播设备全套', '1399.00', 'https://img.ingping.com/images/template/product/201810111017430986227.png,https://img.ingping.com/images/suit/B/20189/201809281051480390411.jpg,https://img.ingping.com/images/suit/B/20189/201809281033570564910.jpg');
INSERT INTO `middle_pic` VALUES ('5', '功能众多 噪音低 便携,小型户外演出套装 ,罗兰CUBE-STREET音箱搭配舒尔SM58s麦克风 户外街唱套装 ', '4425.00', 'https://img.ingping.com/images/template/product/201810101742380522768.png,https://img.ingping.com/images/suit/B/20188/201808021029120438239.jpg');
INSERT INTO `middle_pic` VALUES ('6', '灵活性强 音色细腻自然,户外演出手机直播套装,莱维特MTP LIVE麦克风搭配罗兰AC-60音箱 户外演出手机直播套装', '5491.00', 'https://img.ingping.com/images/template/product/20181010174502045056.png,https://img.ingping.com/images/suit/B/20188/201808291446280970198.jpg');
INSERT INTO `middle_pic` VALUES ('7', '云端下载 手机点歌,BMB品牌KTV套装,BMB DAP-5000功放搭配BMB CSE310音箱 KTV套装', '16748.00', 'https://img.ingping.com/images/template/product/201809031050570500887.png,https://img.ingping.com/images/suit/B/20189/201809011732400941190.jpg');
INSERT INTO `middle_pic` VALUES ('8', '性能高 演唱人声饱满,JBL品牌KTV套装,JBL Ki512音箱搭配皇冠KVS700功放 家庭KTV套装', '21856.00', 'https://img.ingping.com/images/template/product/201809112044040526202.png,https://img.ingping.com/images/suit/B/20189/201809121006150636644.jpg,https://img.ingping.com/images/suit/B/201710/201710111611230468366.jpg,https://img.ingping.com/images/suit/B/201710/201710111611210252444.jpg');
INSERT INTO `middle_pic` VALUES ('9', '稳定 易使用 耐用 价格经济,TAMA IP52KH6,TAMA IP52KH6 帝王之星 Imperialstar架子鼓 (蓝色)', '5979.00', 'https://img.ingping.com/images/template/product/201706282038030947906.png,https://img.ingping.com/images/product/B/201503/201503281100270795943.jpg');
INSERT INTO `middle_pic` VALUES ('10', '61键 考级用琴 插U盘,雅马哈KB-290电子琴,雅马哈(YAMAHA) KB-290 电子琴', '2369.00', 'https://img.ingping.com/images/template/product/201810101646200063495.png,https://img.ingping.com/images/product/B/201306/201306051610060902526.jpg,https://img.ingping.com/images/product/B/201306/201306051610020944621.jpg,https://img.ingping.com/images/product/B/201809/201809100932050410272.jpg,https://img.ingping.com/images/product/B/201306/201306051610080570859.jpg');
INSERT INTO `middle_pic` VALUES ('11', '声场宽阔 抗干扰 防啸叫,得胜 多媒体会议套装,得胜KA-E10音箱搭配得胜TC-TH会议VHF无线麦克风 多媒体会议套装', '9599.00', 'https://img.ingping.com/images/template/product/201706282039560722502.png,https://img.ingping.com/images/suit/B/201510/201510291927230305758.jpg,https://img.ingping.com/images/suit/B/201510/201510291927270497319.jpg,https://img.ingping.com/images/suit/B/201411/201411221523240464684.jpg,https://img.ingping.com/images/suit/B/201510/201510291927250195724.jpg,https://img.ingping.com/images/suit/B/201411/201411221523320778556.jpg');
INSERT INTO `middle_pic` VALUES ('12', '全方位环绕音质组合,JBL 家庭影院套装,JBL Arena 180BK 家庭影院套装', '16398.00', 'https://img.ingping.com/images/template/product/2018070619143802690.png,https://img.ingping.com/images/suit/B/20187/201807061839310412469.jpg,https://img.ingping.com/images/suit/B/20189/201809151344260010310.jpg,https://img.ingping.com/images/suit/B/20189/201809151344280632229.jpg,https://img.ingping.com/images/suit/B/20189/201809151344230397369.jpg');

-- ----------------------------
-- Table structure for `neworders`
-- ----------------------------
DROP TABLE IF EXISTS `neworders`;
CREATE TABLE `neworders` (
  `sid` tinyint(1) NOT NULL,
  `url` varchar(99) NOT NULL,
  `new_title` varchar(50) NOT NULL,
  `share_url` varchar(99) NOT NULL,
  `pro_title` varchar(30) NOT NULL,
  `name_date` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of neworders
-- ----------------------------
INSERT INTO `neworders` VALUES ('1', 'https://sdimg.ingping.com/picshow/L/201809/201809301203570098638.jpg', '东西试过了原装正品，音质不错，发货速度也挺快的，恰如预期。', 'https://img.ingping.com/images/product/S/201408/201408131405590621489.jpg', '普瑞声纳(Presonus) TubePre V2', 'AEC***HIC');
INSERT INTO `neworders` VALUES ('2', 'https://sdimg.ingping.com/picshow/L/201810/201810061218550725228.jpg', '调音台简直太棒了，音质比我想象的要好的多，细腻动听', 'https://img.ingping.com/images/product/S/201408/201408131456590427692.jpg', '雅马哈(YAMAHA) MG16XU 16', 'N***d');
INSERT INTO `neworders` VALUES ('3', 'https://sdimg.ingping.com/picshow/L/201810/201810051538570101743.jpg', '这个麦还不错，简单，傻瓜，不需要进行其他设置，不懂技术的人也可以直接拿来用。但是似乎底噪有一点，太过', 'https://img.ingping.com/images/product/S/201708/201708221421450678227.jpg', 'Blue Yeti 雪怪专业电容话筒麦克风K歌录音直播USB', '丑态');
INSERT INTO `neworders` VALUES ('4', 'https://sdimg.ingping.com/picshow/L/201810/201810051529370441766.jpg', '煲了一个多月，超喜欢，高低中层次分明，古典和流行都不错，很满意！！', 'https://img.ingping.com/images/product/S/201301/201301241139270380208.jpg', '拜亚动力(Beyerdynamic) DT770 PRO ', '我***课');
INSERT INTO `neworders` VALUES ('5', 'https://sdimg.ingping.com/picshow/L/201810/201810051529480562548.png', '服务态度很好，很负责任！ 从头到尾 讲的明明白白的，很好！从此开始踏入主播路！', 'https://img.ingping.com/images/product/S/201112/201112201727590603851.jpg', '得胜(TAKSTAR) PC-K500 电容式录音麦克风(简', 'z***l');

-- ----------------------------
-- Table structure for `right_pic`
-- ----------------------------
DROP TABLE IF EXISTS `right_pic`;
CREATE TABLE `right_pic` (
  `sid` tinyint(1) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `url` varchar(9999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_pic
-- ----------------------------
INSERT INTO `right_pic` VALUES ('13', '出色之音 多指向性,爱科技C414XLII麦克风,爱科技(AKG) C414XLII 电容式录音麦克风', '7199.00', 'https://img.ingping.com/images/product/M/201210/201210151800330696190.jpg,https://img.ingping.com/images/product/B/201210/201210151800330696190.jpg,https://img.ingping.com/images/product/B/201210/201210151810340706520.jpg');
INSERT INTO `right_pic` VALUES ('14', '7寸近场监听 聆听范围宽阔,亚当 T7V有源监听音箱,亚当(ADAM) T7V（7寸）二分频近场录音棚工作室桌面有源监听音箱（只）', '2400.00', 'https://img.ingping.com/images/product/M/201806/201806111833250611632.jpg,https://img.ingping.com/images/product/B/201806/201806111833250611632.jpg,https://img.ingping.com/images/product/B/201806/201806111833590282663.jpg');
INSERT INTO `right_pic` VALUES ('15', '钢琴手感 即插即用,Oxygen 88 MIDI键盘,美奥多(M-AUDIO) Oxygen 88 MIDI键盘 钢琴手感', '4599.00', 'https://img.ingping.com/images/product/M/201302/201302171628060440418.jpg,https://img.ingping.com/images/product/B/201302/201302171628060440418.jpg');
INSERT INTO `right_pic` VALUES ('16', '便携小巧 超强性能,RME Babyface Pro声卡,RME Babyface Pro 电脑录音网络K歌USB声卡', '5449.00', 'https://img.ingping.com/images/product/M/201608/201608021802370328928.jpg,https://img.ingping.com/images/product/B/201608/201608021802370328928.jpg,https://img.ingping.com/images/product/B/201509/201509181035480039635.jpg');
INSERT INTO `right_pic` VALUES ('17', '《声临其境》奖杯同款麦克风,得胜PC-K810麦克风,得胜(TAKSTAR) PC-K810 电容麦克风 直播K歌录音麦克风 (黑色)', '1099.00', 'https://img.ingping.com/images/product/M/201704/201704191500410626224.jpg,https://img.ingping.com/images/product/B/201704/201704191500410626224.jpg,https://img.ingping.com/images/product/B/201704/201704191500440937500.jpg,https://img.ingping.com/images/product/B/201704/201704191500470475596.jpg');
INSERT INTO `right_pic` VALUES ('18', '高品质音效 内置DSP效果器,雅马哈UR242声卡,雅马哈(steinberg) UR242 USB专业录音网络K歌声卡', '1618.00', 'https://img.ingping.com/images/product/M/201706/20170629155816088799.jpg,https://img.ingping.com/images/product/B/201706/20170629155816088799.jpg,https://img.ingping.com/images/product/B/201807/201807311638080409847.jpg,https://img.ingping.com/images/product/B/201505/201505271602090632475.jpg,https://img.ingping.com/images/product/B/201505/2015052716021207943.jpg');
INSERT INTO `right_pic` VALUES ('19', '带麦克风 1080P全高清视频,罗技 C920主播摄像头,罗技(Logitech) C920 1080P全高清网络主播摄像头', '588.00', 'https://img.ingping.com/images/product/M/201707/201707180925450712950.jpg,https://img.ingping.com/images/product/B/201707/201707180925450712950.jpg,https://img.ingping.com/images/product/B/201707/20170718092556086033.jpg');
INSERT INTO `right_pic` VALUES ('20', '封闭式 宽频响大动态声音表现,得胜HD5800监听耳机,得胜(TAKSTAR) HD5800 封闭式 录音监听耳机 （HD5500升级版） (黑色)', '399.00', 'https://img.ingping.com/images/product/M/201807/201807142022310796479.jpg,https://img.ingping.com/images/product/B/201807/201807142022310796479.jpg,https://img.ingping.com/images/product/B/201807/201807161746520585752.jpg,https://img.ingping.com/images/product/B/201807/201807142217390878897.jpg,https://img.ingping.com/images/product/B/201807/201807231152410775884.jpg');
INSERT INTO `right_pic` VALUES ('21', '15寸有源 大功率 带压缩器,山逊Auro X15D舞台音箱,山逊(SAMSON) Auro X15D 15寸 500瓦 有源舞台音箱（单只）', '3558.00', 'https://img.ingping.com/images/product/M/201502/20150227114755029746.jpg,https://img.ingping.com/images/product/B/201502/20150227114755029746.jpg');
INSERT INTO `right_pic` VALUES ('22', '双通道手持无线 音质出色,舒尔BLX288/PG58麦克风,舒尔(SHURE) BLX288/PG58 KTV/演出手持式无线动圈麦克风', '3899.00', 'https://img.ingping.com/images/product/M/201312/201312021204390594321.jpg,https://img.ingping.com/images/product/B/201312/201312021204390594321.jpg,https://img.ingping.com/images/product/B/201312/201312021204440350710.jpg,https://img.ingping.com/images/product/B/201312/201312021204460631336.jpg');
INSERT INTO `right_pic` VALUES ('23', '16路 模拟效果器 幻象电源供电,雅马哈MG16XU调音台,雅马哈(YAMAHA) MG16XU 16路带效果器模拟 专业调音台', '3199.00', 'https://img.ingping.com/images/product/M/201408/201408131456590427692.jpg,https://img.ingping.com/images/product/B/201408/201408131456590427692.jpg');
INSERT INTO `right_pic` VALUES ('24', '数字效果清晰及细致 适用现场,TC ElectronicM2,TC Electronic M2000专业数字效果器', '7199.00', 'https://img.ingping.com/images/product/M/201601/201601151103170590200.jpg,https://img.ingping.com/images/product/B/201601/201601151103170590200.jpg,https://img.ingping.com/images/product/B/201601/201601151103230205763.jpg');
INSERT INTO `right_pic` VALUES ('25', '21.5寸 落地式 3T容量,雷客惊艳Note一体机,雷客(skyrocker) 惊艳 Note 21.5寸触屏卡拉OK点唱一体机 落地式 红外屏 (3T)', '2990.00', 'https://img.ingping.com/images/product/M/201711/201711201814590803677.jpg,https://img.ingping.com/images/product/B/201711/201711201814590803677.jpg');
INSERT INTO `right_pic` VALUES ('26', '蓝牙遥控点歌 云曲库 内置WI-FI,雷客惊艳Note一体机,视易(EVIDEO) K20S 家庭KTV点歌机高清播放器 云曲库（不带硬盘）', '1245.00', 'https://img.ingping.com/images/product/M/201807/201807121609220807696.jpg,https://img.ingping.com/images/product/B/201807/201807121609220807696.jpg');
INSERT INTO `right_pic` VALUES ('27', '高水准音质 噪声低 坚固耐用,雅马哈KMA-1080功放,雅马哈(YAMAHA) KMA-1080 卡包功放', '3265.00', 'https://img.ingping.com/images/product/M/201301/201301181938060107619.jpg,https://img.ingping.com/images/product/B/201301/201301181938060107619.jpg');
INSERT INTO `right_pic` VALUES ('28', '三分频系统 覆盖更多空间,雅马哈KMS-3100卡包音箱,雅马哈(YAMAHA) KMS-3100 KTV/家庭 卡包音箱', '4889.00', 'https://img.ingping.com/images/product/M/201707/201707121735040518254.jpg,https://img.ingping.com/images/product/B/201707/201707121735040518254.jpg');
INSERT INTO `right_pic` VALUES ('29', '枫木指板 手感好 性价比高,芬达0133002327电吉他 ,芬达(Fender) 013-3002-327 墨豪 枫木指板电吉他 (透明蓝宝石)', '5400.00', 'https://img.ingping.com/images/product/M/201505/201505141439270592233.jpg,https://img.ingping.com/images/product/B/201505/201505141439270592233.jpg');
INSERT INTO `right_pic` VALUES ('30', '键盘控制器 简单快捷 ,诺维逊LaunchpadPro,诺维逊(Novation) Launchpad Pro 键盘控制器', '3489.00', 'https://img.ingping.com/images/template/product/20181010164304007447.png,https://img.ingping.com/images/product/B/201512/20151203180446024645.jpg');
INSERT INTO `right_pic` VALUES ('31', '26寸单板云杉 配送包,TomTUT-680M尤克里里 ,Tom TUT-680M 26寸单板云杉尤克里里 小吉他 （配包）', '6199.00', 'https://img.ingping.com/images/product/M/201508/201508171623480571291.jpg,https://img.ingping.com/images/product/B/201508/201508171623480571291.jpg');
INSERT INTO `right_pic` VALUES ('32', '轻便小巧 折卸简单 表现力丰富,罗兰 TD-4KP电子鼓,罗兰(Roland) TD-4KP 电子鼓 便携式可折叠电鼓 旅行电鼓 家庭娱乐', '4889.00', 'https://img.ingping.com/images/product/M/201401/201401241048470029674.jpg,https://img.ingping.com/images/product/B/201401/201401241048470029674.jpg');
INSERT INTO `right_pic` VALUES ('33', '鹅颈式无线 一拖二 高传真音质,咪宝ACT-300会议麦克风,咪宝(MIPRO) ACT-300 鹅颈式无线会议电容麦克风', '2599.00', 'https://img.ingping.com/images/product/M/201411/201411051852260468181.jpg,https://img.ingping.com/images/product/B/201411/201411051852260468181.jpg');
INSERT INTO `right_pic` VALUES ('34', '耳放/前级切换功能 可立式摆放,旷世CMA400i解码器,旷世(Questyle) CMA400i 高品质发烧级解码器 耳放 前级', '8944.00', 'https://img.ingping.com/images/product/M/201807/201807261058100660645.jpg,https://img.ingping.com/images/product/B/201807/201807261058100660645.jpg');
INSERT INTO `right_pic` VALUES ('35', '便携式 可换咪头 同期6轨录音,ZOOM H6数字录音机,ZOOM H6 便携式数字录音机 同期6轨录音（可换咪头） 新闻采访录音笔', '2890.00', 'https://img.ingping.com/images/product/M/201309/201309101552500216496.jpg,https://img.ingping.com/images/product/B/201309/201309101552500216496.jpg');
INSERT INTO `right_pic` VALUES ('36', '低音强劲 丰富细腻的声音,舒尔 SE215 HI-FI耳塞,舒尔(SHURE) SE215专业入耳式监听耳机 入耳式HI-FI隔音耳塞（透明）', '799.00', 'https://img.ingping.com/images/product/M/201602/201602261753080853214.jpg,https://img.ingping.com/images/product/B/201602/201602261753080853214.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('15', 'lisi', 'e3ceb5881a0a1fdaad01296d7554868d', '222@222', '2018-10-10 16:13:01');
INSERT INTO `user` VALUES ('16', 'wangwu', '1a100d2c0dab19c4430e7d73762b3423', '333@333', '2018-10-10 16:14:37');
INSERT INTO `user` VALUES ('17', 'qqqq', '73882ab1fa529d7273da0db6b49cc4f3', '444@444', '2018-10-10 17:00:03');
INSERT INTO `user` VALUES ('18', 'liangll', '5b1b68a9abf4d2cd155c81a9225fd158', '555@555', '2018-10-10 17:46:00');
INSERT INTO `user` VALUES ('19', 'lianglll', 'f379eaf3c831b04de153469d1bec345e', '666@666', '2018-10-13 14:13:58');
INSERT INTO `user` VALUES ('20', 'liangllll', 'f63f4fbc9f8c85d409f2f59f2b9e12d5', '777@777', '2018-10-13 14:17:00');
INSERT INTO `user` VALUES ('21', 'lianglllll', 'a73f86ae408af70b67141843e7130723', 'lll@lll', '2018-10-13 14:20:31');
INSERT INTO `user` VALUES ('22', 'zxc', 'ecb97ffafc1798cd2f67fcbc37226761', 'zxc@zxc', '2018-10-13 14:57:57');
INSERT INTO `user` VALUES ('23', 'liangllllll', '670b14728ad9902aecba32e22fa4f6bd', '000@000', '2018-10-13 19:42:00');
INSERT INTO `user` VALUES ('24', 'aaaaaa', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 'aaa@aaa', '2018-10-15 16:42:40');
INSERT INTO `user` VALUES ('25', 'qqqqqq', '343b1c4a3ea721b2d640fc8700db0f36', 'qqq@qqq', '2018-10-15 17:03:09');

-- ----------------------------
-- Table structure for `ypnews`
-- ----------------------------
DROP TABLE IF EXISTS `ypnews`;
CREATE TABLE `ypnews` (
  `sid` tinyint(1) NOT NULL,
  `url` varchar(99) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `yp_title` varchar(50) NOT NULL,
  `name_date` varchar(30) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ypnews
-- ----------------------------
INSERT INTO `ypnews` VALUES ('1', 'https://zximg.ingping.com/images/article_images/B/201809/201809301132230896435.png', 'DJ 小贴士：混音中的旋律奥秘', '音频技术');
INSERT INTO `ypnews` VALUES ('2', 'https://zximg.ingping.com/images/article_images/B/201810/201810091048260313220.png', '录音中对麦克风的隔离：避免声泄漏&过多的房间声染色', '音频技术');
INSERT INTO `ypnews` VALUES ('3', 'https://zximg.ingping.com/images/article_images/B/201810/201810091035400253944.jpg', '5 步让你在家做音乐时网速上天', '音频技术');
INSERT INTO `ypnews` VALUES ('4', 'https://zximg.ingping.com/images/article_images/B/201810/201810090921130297361.jpg', '购买HIFI耳塞，烧友总结的3点要素千万不能忽略！', '产品评测');
INSERT INTO `ypnews` VALUES ('5', 'https://zximg.ingping.com/images/article_images/B/201810/201810081405110914140.jpg', '说唱人声缩混技巧（1）', '行业资讯');
