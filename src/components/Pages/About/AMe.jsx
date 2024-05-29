import React from "react";

import styles from "./About.module.css";
import me from "./Me.jpg"


export const AMe = () => {
  return (
    <div>
        <img src={me} className="me" alt="Me" />
        <section className={styles.container} id="about">
      <h2 className={styles.title}>关于我</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>大一学生</h3>
              <p>
                就读于滑铁卢大学计算机系
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>维多利亚+上海人</h3>
              <p>
                出生于上海，三岁前在新加坡，三到八岁在上海，八岁到十九岁在维多利亚
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>兴趣爱好</h3>
              <p>
                羽毛球，钢琴，吉他，打游戏，吃喝玩乐，睡觉，捣鼓软件
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default AMe