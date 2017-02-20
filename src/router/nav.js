export const NAV_METADATA = [
  {
    label: '开发指南',
    route: 'devhelp',
    child: [
      {
        label: '起步',
        route: 'start'
      },
      {
        label: '全局css样式',
        route: 'global'
      }
    ]
  },
  {
    label: '更新日志',
    route: 'devhelp'
  },
  {
    label: '组件',
    route: 'component',
    child: [
      {
        label: '基础组件',
        route: 'basic',
        child: [
          {
            label: '按钮',
            route: 'button'
          },
          {
            label: '图标',
            route: 'icon'
          }
        ]
      },
      {
        label: '表单组件',
        route: 'form'
      },
      {
        label: '视图组件',
        route: 'view'
      },
      {
        label: '导航组件',
        route: 'nav'
      },
      {
        label: '其他组件',
        route: 'other'
      }
    ]
  }
]
