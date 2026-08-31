# A Typescript solution

**Author:** emrahgunduz
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/1852967/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/1852967/)

---

This is the solution I came up that works on submit with 100% completion.
Tried to make it readable, can be optimized.

```typescript
interface Possibles {
  [key: string]: string
}

const middles: string[] = ['0', '1', '8']
const possibles: Possibles = { '0': '0', '1': '1', '8': '8', '6': '9', '9': '6' }

function fillMiddle( n: number ): (string | null)[][] {
  const middle = Math.ceil( n / 2 - 1 )
  const fillQueue: (string | null)[][] = []

  for ( const value of middles ) {
    let elem: (string | null)[] = Array( n ).fill( null )
    elem[middle] = value
    fillQueue.push( elem )
  }

  return fillQueue
}

function fillSides( queue: (string | null)[][] ): (string | null)[][] {
  const leftIndex = queue[0].indexOf( null )
  const rightIndex = queue[0].length - 1 - leftIndex

  const fillQueue: (string | null)[][] = []
  queue.forEach( ( elem ) => {
    for ( const [key, value] of Object.entries( possibles ) ) {
      const elemCopy = [...elem]
      elemCopy[leftIndex] = key
      elemCopy[rightIndex] = value
      if ( elemCopy[0] !== '0' ) {
        fillQueue.push( elemCopy )
      }
    }
  } )

  return fillQueue
}

function findStrobogrammatic( n: number ): string[] {
  if ( n === 0 ) {
    return []
  }

  if ( n === 1 ) {
    return middles
  }

  let queue: (string | null)[][]
  if ( n % 2 === 1 ) {
    queue = fillMiddle( n )
  } else {
    queue = Array( 1 ).fill( Array( n ).fill( null ) )
  }

  while ( queue[0].indexOf( null ) !== -1 ) {
    queue = fillSides( queue )
  }

  const final: string[] = []
  queue.forEach( ( elem ) => final.push( elem.join( '' ) ) )

  return final
}
```