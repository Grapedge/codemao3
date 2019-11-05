/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
trials.push({
  set: "Kitten",
  course: {
    name: "L-拯救编程猫",
    form: [
      {
        title: "基础信息",
        item: [
          {
            type: "info"
          }
        ]
      },
      {
        title: "整体表现",
        item: [
          {
            type: "star-box"
          }
        ]
      },
      {
        title: "课堂知识",
        item: [
          {
            type: "check-box",
            name: "learn-points",
            value: [
              "初步认识 x/y 坐标轴",
              "无限循环结构（重复执行）",
              "相对运动原理",
              "动画制作原理"
            ]
          }
        ]
      },
      {
        title: "课堂情况",
        item: [
          {
            type: "select",
            name: "communication",
            value: {
              交流积极:
                "${name}今天在课堂上跟老师的沟通交流顺畅，表达清晰，能够大胆说出自己的想法。",
              交流慢热:
                "${name}今天在课堂上课程开始的时候比较腼腆，但随着课堂推进，跟老师的沟通就积极了许多。",
              交流被动:
                "${name}今天在课堂上比较腼腆，但是也能紧跟老师的思路，在引导下完成整个作品的探索。"
            }
          },
          {
            type: "select",
            name: "future",
            value: {
              "有趣/学科挂钩":
                "通过学习编程，每节课${name}不仅能制作出有趣的作品，还可以锻炼逻辑思维，提前学习高年级数学、英语、物理等有关的知识，为未来的升学提供加分项。",
              "培养逻辑思维/制作游戏":
                "在上课的过程中培养${name}反复分析-实践的动手习惯，锻炼解决问题的编程逻辑思维。经过一段时间的学习，你也可以独立创作出逻辑严谨的作品啦~例如愤怒的小鸟、水果忍者等。",
              锻炼孩子能力:
                "通过项目式教学法，可以锻炼${name}分析问题和解决问题的思想和方法；并以课上整合知识点完成作品的方式，培养${name}整合资源完成复杂项目的能力，从被动的学习者转变为学习的主人。"
            }
          },
          {
            type: "select",
            name: "problem",
            value: {
              "被动（紧跟老师思路）":
                "${name}课上非常配合老师，会紧跟老师的思路完成作品，老师希望下次上课你可以大胆说出自己想要的效果，并且可以尝试利用积木来实现。探究精神在编程学习中是很重要的哦，勇于创造，我们才能做出更多更好的作品哦。",
              "粗心（提示后能独立修改）":
                "老师在给${name}上课的过程中，发现你有一点点粗心呢~但是在提示下能够快速定位到自己的错误点，然后加以修改，说明逻辑和理解方面还是很清晰，如果能够再细心一点就更加完美啦！以后不管是学习还是生活上，都要细心地观察和对待哦~",
              "粗心（不能独立完成修改）":
                "老师在给${name}上课的过程中，发现你有一点点粗心呢~每次搭建积木后，尝试运行作品查看效果，能够帮助我们快速定位错误点，养成查错、改错的好习惯哦~所有以后不管是学习还是生活上，都要细心地观察和对待哦~",
              思维跳跃:
                "${name}的整体逻辑思维比较强，而且有很多自己的想法，会坚持自己的创意，不拘泥于示例作品的做法，这种创新精神非常棒，继续保持哦！但是在创新的过程中，还是会比较心急，思维太跳跃，想到就做，如果跟老师多沟通一些会更好哦，这样我们才能一起更好的掌握知识。",
              逻辑较差:
                "老师发现${name}在上课的过程中，有很多灵感和创意，但是还不知道要怎么实现~ 那么通过学习编程，${name}能给把零散的知识点加以整合，学会自己理顺思路，强化逻辑思维，然后制作出完整的作品。老师非常期待能够跟你一起实现你的奇思妙想哦~",
              浮躁:
                "老师发现${name}是一有想法就要马上动手去做的，是个行动派哦～但是这样子做的话，很有可能会败在一些细节上。所以老师给你的建议是，做作品的过程中，要保持不骄不躁的状态，从最简单的积木开始做起，慢慢地在基础任务上一步步地堆砌积木。",
              麦克风问题:
                "今天因为${name}的设备无法正常运行，所以老师没有办法听到你的想法呢~ 希望下次上课可以把麦克风的问题解决好，老师期待能够听到你的奇思妙想，然后跟你一起实现哦！",
              网络问题:
                "今天因为${name}的网络不太稳定，上课可能受到了一定的影响~ 但${name}坚持完成了今天的任务，十分值得鼓励哦~",
              胆怯:
                "学习就是一个不断试错的过程，不要害怕错误，要学会在错误中吸取经验。${name}可以在创作过程中多多尝试哦。",
              "上课过程中不受控制，一直玩游戏(戒除游戏瘾)":
                "老师发现${name}非常喜欢玩游戏呢，那么今天我们体验了如何制作游戏，并为游戏制定规则，这样子是不是会让你更有成就感呢？通过学习编程，我们以后都可以在自己创作的游戏里面制定规则啦~老师非常期待能玩到你亲手做的游戏呢！",
              表达不清晰:
                "老师发现在让${name}讲解作品原理的过程中，你的表达还不够清晰，需要再多加练习，能清晰表达出来的知识，才是真的学透吃透。课后可以尝试讲解给爸爸妈妈或者同学听哦~"
            }
          },
          {
            type: "select",
            name: "homework",
            value: {
              课后进行复习:
                "最后建议${name}课后一定要通过编程猫客户端→我的课程→任务讲解进行复习，课上做过的作品，也可以把积木删掉，重新理清逻辑，再拼接一次。这样子才能够把基础打扎实，以后才能做出更加优秀的作品哦！温故而知新，能让我们进步得更快哦~加油！",
              课后练习表达:
                "最后建议${name}多留意经常出现的积木，每次运用之后都对这些常用积木进行思考及总结。觉得思路不清晰的时候，可以尝试先用纸笔记录下来，理清思路之后再尝试去讲解给别人听（可以教爸爸妈妈和朋友哦~），在讲解之后，你就会发现自己真正对这个知识点掌握透彻啦。加油！"
            }
          }
        ]
      }
    ],
    template: [
      "【课堂名称】拯救编程猫",
      "【整体表现】${star}",
      "【课堂知识】${name}通过本节课的学习，掌握了以下知识点：${learn-points}",
      "【课堂情况】${communication}${future}",
      "【老师寄语】${problem}",
      "【老师建议】${homework}"
    ]
  }
});
