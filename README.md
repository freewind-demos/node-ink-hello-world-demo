# node-ink-hello-world-demo

## 简介

Ink 是 Facebook 出品的 React 风格 CLI 框架，可以用 React 组件构建交互式终端界面。

## 快速开始

### 环境要求

- Node.js >= 16

### 运行

```bash
pnpm install
pnpm start
```

## 概念讲解

### React 风格组件

Ink 使用 React 组件来描述 UI，与 React DOM 类似但输出到终端：

```javascript
import { render, Text, Box } from "ink"
import React from "react"

const MyUI = () => (
  <Box flexDirection="column">
    <Text bold>Hello!</Text>
  </Box>
)

render(React.createElement(MyUI))
```

### 核心组件

- `<Box>`: 容器，类似 div，支持 flex 布局
- `<Text>`: 文本，支持颜色、背景、加粗等
- `<Spacer>`: 占位符

### 状态管理

使用 React 的 useState 管理状态：

```javascript
const [count, setCount] = useState(0)
```

### 输入处理

用 `useInput` 处理键盘事件：

```javascript
useInput((input, key) => {
  if (key.upArrow) setCount((c) => c + 1)
  if (key.escape) process.exit(0)
})
```

## 完整示例

```javascript
import { render, Text, Box, useInput } from "ink"
import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  useInput((input, key) => {
    if (key.upArrow) setCount((c) => c + 1)
    if (key.downArrow) setCount((c) => c - 1)
    if (key.escape) process.exit(0)
  })

  return (
    <Box flexDirection="column" alignItems="center">
      <Text bold>{"\n"}🎮 Ink Counter Demo</Text>
      <Text dimColor>Press ↑↓ to change, Esc to exit</Text>
      <Text>{"\n"}</Text>
      <Box width={30} justifyContent="center">
        <Text backgroundColor="cyan" color="black" bold>
          {" ".repeat(Math.max(0, 10 + count))}
          {count}
        </Text>
      </Box>
      <Text>{"\n"}</Text>
      <Text dimColor>Count: {count}</Text>
    </Box>
  )
}

render(React.createElement(Counter))
```

## 完整讲解

这个 Demo 展示了 Ink 的核心用法。

**组件渲染**: 用 `render()` 把 React 组件输出到终端，效果类似 React DOM 的 `ReactDOM.render()`。

**布局**: `<Box>` 支持 flexbox 布局，`flexDirection="column"` 竖向排列，`alignItems="center"` 居中。

**样式**: `<Text>` 通过 `bold`、`dimColor`、`backgroundColor` 等 Props 设置样式。

**响应式**: `useState` + `useInput` 实现交互，箭头键增减计数器数值，Esc 退出。

Ink 适合已经熟悉 React 的开发者快速构建 CLI 界面。
