import CountUp from 'react-countup'

export default function LoadingCounter({afterCounting}) {
  return (
    <CountUp
    start={0}
    end={100}
    duration={1}
    delay={.4}
    suffix='%'
    onEnd={afterCounting}
    />
  )
}
