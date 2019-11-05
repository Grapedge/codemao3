/* eslint-disable no-unused-vars */
var config = {
  name: "反馈生成器3.0",
  course: {
    count: 6, // 课程配置数量
  }
}

var trials = [];
var normals = [];

// 下面的内容不要修改
// 这些内容用于修改与加载配置文件
(function() {
  document.title = config.name;
  // 加载配置文件
  for (let i = 0; i < config.course.count; ++i) document.write(`<script src='config/${i}.js'></script>`);
})();