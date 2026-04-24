import {Box, Text, render, useApp, useInput} from "ink"
import {type FC, StrictMode, useState} from "react"

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)
  const {exit} = useApp()

  useInput((_input, key) => {
    if (key.upArrow) {
      setCount((currentCount) => currentCount + 1)
    }

    if (key.downArrow) {
      setCount((currentCount) => currentCount - 1)
    }

    if (key.escape) {
      exit()
    }
  })

  const paddingWidth = Math.max(0, 10 + count)

  return (
    <Box flexDirection="column" alignItems="center">
      <Text bold>
        {"\n"}Ink Counter Demo
      </Text>
      <Text dimColor>Press ↑↓ to change, Esc to exit</Text>
      <Text>{"\n"}</Text>
      <Box width={30} justifyContent="center">
        <Text backgroundColor="cyan" color="black" bold>
          {" ".repeat(paddingWidth)}
          {count}
        </Text>
      </Box>
      <Text>{"\n"}</Text>
      <Text dimColor>Count: {count}</Text>
    </Box>
  )
}

render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
