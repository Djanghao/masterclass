# JavaScript easy to read

**Author:** kik0
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/1295270/](https://leetcode.com/problems/design-log-storage-system/solutions/1295270/)

---

```
class LogSystem {
  constructor () {
    this.logs = [] // [ [id, timestamp], [id, timestamp] ]
  }

  put (id, timestamp) {
    this.logs.push([id, timestamp])
  }

  retrieve (start, end, granularity) {
    const startTime = this.parse(start, granularity)
    const endTime = this.parse(end, granularity)

    return this.logs.reduce((result, [id, timestamp]) => {
      const parsedTime = this.parse(timestamp, granularity)

      if (parsedTime >= startTime && parsedTime <= endTime) {
        result.push(id)
      }

      return result
    }, [])
  }

  parse (timestamp, granularity) {
    // Take into account .slice is not inclusive
    const map = {
      Year: 1,
      Month: 2,
      Day: 3,
      Hour: 4,
      Minute: 5,
      Second: 6
    }

    const index = map[granularity]

    return timestamp.split(':').slice(0, index).join(':')
  }
}
```