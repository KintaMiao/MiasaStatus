import { Center, Title } from '@mantine/core'
import { IconCircleCheck, IconAlertCircle } from '@tabler/icons-react'

export default function OverallStatus({
  state,
}: {
  state: { overallUp: number; overallDown: number; lastUpdate: number }
}) {
  let statusString = ''
  let icon = <IconAlertCircle style={{ width: 64, height: 64, color: '#b91c1c' }} />
  if (state.overallUp === 0 && state.overallDown === 0) {
    statusString = '暂无数据'
  } else if (state.overallUp === 0) {
    statusString = '所有系统均无法运行'
  } else if (state.overallDown === 0) {
    statusString = '一切正常'
    icon = <IconCircleCheck style={{ width: 64, height: 64, color: '#059669' }} />
    } else {
      statusString = `${state.overallUp + state.overallDown} 台中的 ${state.overallDown} 台`
    }


  return (
    <>
      <Center>{icon}</Center>
      <Title mt="sm" style={{ textAlign: 'center' }} order={1}>
        {statusString}
      </Title>
      <Title mt="sm" style={{ textAlign: 'center', color: '#70778c' }} order={5}>
        上次更新时间:{' '}
        {`${new Date(state.lastUpdate * 1000).toLocaleString()} (${
          Math.round(Date.now() / 1000) - state.lastUpdate
        } 秒前)`}
      </Title>
    </>
  )
}
