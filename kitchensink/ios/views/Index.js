import React, { Component, PropTypes } from 'react'
import { Page, Navbar, List } from 'jmui'

export default class Index extends Component {

  static propTypes = {};

  static contextTypes = {
    router: PropTypes.object
  };

  handleJump (pathname) {
    this.context.router.push(pathname)
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar title='Kitchen Sink' />}>
        <List label='更多组件已在jmui中实现，持续添加到演示中'>
          <List.Group title='组件'>
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='按钮'
              after='Button'
              onClick={this.handleJump.bind(this, '/components/button')}
            />
            <List.Item
              icon={<span className='iconfont icon-biaodan' />}
              title='表单'
              after='Form'
              onClick={this.handleJump.bind(this, '/components/form')}
            />
            <List.Item
              icon={<span className='iconfont icon-danxuan' />}
              title='单选列表'
              after='RadioField'
              onClick={this.handleJump.bind(this, '/components/radiofield')}
            />
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='多选列表'
              after='CheckField'
              onClick={this.handleJump.bind(this, '/components/checkfield')}
            />
            <List.Item
              icon={<span className='iconfont icon-xuanze' />}
              title='选择器'
              after='Picker'
              onClick={this.handleJump.bind(this, '/components/picker')}
            />
          </List.Group>
          <List.Group title='导航'>
            <List.Item
              icon={<span className='iconfont icon-daohang' />}
              title='导航条'
              after='Navbar'
              onClick={this.handleJump.bind(this, '/components/navbar')}
            />
            <List.Item
              icon={<span className='iconfont icon-tab' />}
              title='标签栏'
              after='Tabbar'
              onClick={this.handleJump.bind(this, '/components/tabbar')}
            />
            <List.Item
              icon={<span className='iconfont icon-dibutiao' />}
              title='工具栏'
              after='Toolbar'
              onClick={this.handleJump.bind(this, '/components/toolbar')}
            />
          </List.Group>
          <List.Group title='容器'>
            <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='区块'
              after='Block'
              onClick={this.handleJump.bind(this, '/components/block')}
            />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='网格'
              after='Grid'
              onClick={this.handleJump.bind(this, '/components/grid')}
            />
          </List.Group>
          <List.Group title='布局'>
            <List.Item
              icon={<span className='iconfont icon-shouji' />}
              title='视图'
              after='View'
              onClick={this.handleJump.bind(this, '/components/view')}
            />
            <List.Item
              icon={<span className='iconfont icon-pages' />}
              title='静态页面组'
              after='Pages'
              onClick={this.handleJump.bind(this, '/components/pages')}
            />
            <List.Item
              icon={<span className='iconfont icon-qiehuan' />}
              title='动画页面组'
              after='TransitionPages'
              onClick={this.handleJump.bind(this, '/components/transitionpages')}
            />
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='页面'
              after='Page'
              onClick={this.handleJump.bind(this, '/components/page')}
            />
          </List.Group>
        </List>
      </Page>
    )
  }
}
