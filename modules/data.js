/* ============================================================
 *  共享数据层 data.js
 *  主页面 pet-collar-3d.html 与各模块详情页统一引用。
 *  改这里的配色 / 传感器参数，所有页面同步生效。
 * ============================================================ */

// size=32 时的参考半径（几何统一用它构建，再等比缩放）
export const REF_R = 1.324;

/* ---------- 外观风格定义 ---------- */
export const STYLES = {
  sport: { name:'竞速机能', sub:'棱角硬壳 · 薄荷绿', form:'tactical',
    band:0x14171c, bandRough:0.45, bandMetal:0.2, bandFlat:0.7, tube:0.30,
    pod:0x0d0f13, podRough:0.3, podMetal:0.6, accent:0x7cf5c4,
    stitch:0x7cf5c4, buckle:0x2a2e36, buckleMetal:0.9, fabric:false, tag:'hex',
    swatch:['#14171c','#7cf5c4','#0d0f13'] },
  mint: { name:'极简纤薄', sub:'胶囊圆柱 · 陶瓷白', form:'slim',
    band:0xeef1f4, bandRough:0.6, bandMetal:0.05, bandFlat:0.55, tube:0.24,
    pod:0xfafbfc, podRough:0.35, podMetal:0.1, accent:0x46d3ff, stitch:0xc6ccd4,
    buckle:0xd7dde4, buckleMetal:0.4, fabric:false, tag:'pill',
    swatch:['#eef1f4','#46d3ff','#fafbfc'] },
  candy: { name:'萌宠泡泡', sub:'圆润鼓包 · 珊瑚粉', form:'bubble',
    band:0xff8fab, bandRough:0.7, bandMetal:0.02, bandFlat:0.6, tube:0.34,
    pod:0xfff4e6, podRough:0.4, podMetal:0.05, accent:0xffd166, stitch:0xffffff,
    buckle:0xffb4c6, buckleMetal:0.2, fabric:true, tag:'heart',
    swatch:['#ff8fab','#ffd166','#fff4e6'] },
  leather: { name:'复古铆钉', sub:'扁平皮牌 · 黄铜扣', form:'classic',
    band:0x6b4226, bandRough:0.78, bandMetal:0.05, bandFlat:0.5, tube:0.30,
    pod:0x2c2620, podRough:0.45, podMetal:0.5, accent:0xc9a44c, stitch:0xd9b88a,
    buckle:0xc9a44c, buckleMetal:0.85, fabric:true, tag:'bone',
    swatch:['#6b4226','#c9a44c','#2c2620'] },
  midnight: { name:'六角装甲', sub:'多面棱镜 · 钛石墨', form:'armor',
    band:0x23262d, bandRough:0.35, bandMetal:0.7, bandFlat:0.72, tube:0.30,
    pod:0x171a1f, podRough:0.25, podMetal:0.85, accent:0x46d3ff, stitch:0x3a3f48,
    buckle:0x4a505a, buckleMetal:1.0, fabric:false, tag:'shield',
    swatch:['#23262d','#46d3ff','#171a1f'] },
  sakura: { name:'花瓣环绕', sub:'花形软壳 · 樱粉紫', form:'petal',
    band:0xc8a8e9, bandRough:0.62, bandMetal:0.08, bandFlat:0.6, tube:0.32,
    pod:0xf6edff, podRough:0.38, podMetal:0.1, accent:0xff9ec7, stitch:0xffffff,
    buckle:0xd9c2f0, buckleMetal:0.3, fabric:true, tag:'flower',
    swatch:['#c8a8e9','#ff9ec7','#f6edff'] },
};

/* ---------- 传感器图标（SVG path） ---------- */
export const ICON = {
  heart:'<path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.5 12 20 12 20z"/>',
  temp:'<path d="M10 13V5a2 2 0 1 1 4 0v8a4 4 0 1 1-4 0z"/>',
  motion:'<path d="M5 12h4l2-5 3 10 2-5h3"/>',
  gps:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>',
};

/* ---------- 传感器定义（分布式布置 + 详情数据） ----------
 * 详情页（detail.html）会用到每个传感器的 desc / specs / principle / blueprint
 * —— principle 与 blueprint 将在第 4 步补充填写。
 */
export const SENSORS = [
  { id:'pod',   name:'主控舱',   sub:'MCU·电池·蓝牙', angle:Math.PI*1.5, big:true,  color:0x7cf5c4, icon:'motion',
    desc:'双核低功耗主控芯片，统筹所有传感器数据；蓝牙 5.3 与手机实时同步，磁吸式充电。',
    specs:[['芯片','nRF5340 双核'],['电池','300mAh 锂聚合物'],['续航','7 天待机'],['连接','蓝牙 5.3 / NFC']],
    principle:'', blueprint:'' },
  { id:'heart', name:'心率传感',  sub:'PPG 光电', angle:Math.PI*1.5-0.62, color:0xff6b6b, icon:'heart',
    desc:'绿光 + 红外双波长 PPG 光电容积描记，24 小时连续监测心率与心率变异性(HRV)，支持心律异常预警。',
    specs:[['精度','±2 BPM'],['采样','连续 24h'],['波长','525 / 880nm'],['功能','心律预警 / HRV']],
    principle:'', blueprint:'' },
  { id:'temp',  name:'体温监测',  sub:'红外测温', angle:Math.PI*1.5+0.62, color:0xffb454, icon:'temp',
    desc:'医疗级红外热电堆传感器，贴肤测温，实时追踪体表温度，发烧与异常体温主动提醒。',
    specs:[['精度','±0.1 ℃'],['量程','32–43 ℃'],['响应','1 秒'],['功能','发热预警']],
    principle:'', blueprint:'' },
  { id:'gps',   name:'定位模块',  sub:'GPS·北斗', angle:Math.PI*1.5-1.5, color:0x46d3ff, icon:'gps',
    desc:'GPS + 北斗 + GLONASS 三模定位，L1/L5 双频，支持电子围栏、轨迹回放与走失寻回。',
    specs:[['精度','≤5 米'],['频段','L1 + L5'],['更新','1 Hz'],['功能','围栏 / 轨迹回放']],
    principle:'', blueprint:'' },
  { id:'motion',name:'运动姿态',  sub:'六轴 IMU', angle:Math.PI*1.5+1.5, color:0xa78bfa, icon:'motion',
    desc:'六轴惯性测量单元(三轴加速度 + 三轴陀螺仪)，识别步态/奔跑/睡眠，支持跌倒检测。',
    specs:[['自由度','6 轴'],['量程','±16 g'],['功能','步态 / 睡眠'],['告警','跌倒检测']],
    principle:'', blueprint:'' },
];

/* ---------- 颈围 → 显示缩放（16cm→0.72, 55cm→1.12） ---------- */
export function displayScale(cm){ return 0.72 + (cm-16)/(55-16)*0.40; }

/* ---------- 颈围 → 适用宠物类型 ---------- */
export function petTypeOf(cm){
  if(cm<=22) return '幼猫 · 小猫';
  if(cm<=30) return '成猫 · 小型犬';
  if(cm<=40) return '中型犬';
  if(cm<=48) return '大型犬';
  return '超大型犬';
}
