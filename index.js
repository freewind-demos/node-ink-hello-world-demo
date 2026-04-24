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
