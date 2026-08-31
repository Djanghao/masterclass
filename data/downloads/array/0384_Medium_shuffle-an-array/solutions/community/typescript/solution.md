# Simple and interesting problem 😃

**Author:** AielloChan
**Votes:** 2
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/1165080/](https://leetcode.com/problems/shuffle-an-array/solutions/1165080/)

---

Sure, we can say many kinds of shuffle way, but does it really equal opportunities? Let's check out

I'll use this code to verify how my shuffle equal opportunities is:

## Test code

```typescript
const s = new Solution([-6, 10, 184])
const map = {
    "-6,10,184": 0,
    "-6,184,10": 0,
    "184,-6,10": 0,
    "184,10,-6": 0,
    "10,184,-6": 0,
    "10,-6,184": 0,
} as any

for (let i = 0; i < 1e4; i++) {
    map[s.shuffle().toString()]++
    s.reset()
}
console.log(map);
```

## 1. sort + random

```typescript
class Solution {
    nums: number[] = []
    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    shuffle(): number[] {
        return this.nums.slice().sort(() => 0.5 - Math.random())
    }
}
```

And after we run test code, we got this:

```typescript
{
  "-6,10,184": 3727,
  "-6,184,10": 643,
  "184,-6,10": 596,
  "184,10,-6": 3118,
  "10,184,-6": 655,
  "10,-6,184": 1261
}
```

hum, looks not ok, right?

## 2. replace first item

```typescript
class Solution {
    nums: number[] = []
    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    shuffle(): number[] {
        const nums = this.nums.slice()
        for (let i = 0, j = nums.length; i < j; i++) {
            if (Math.random() > 0.5) {
                [nums[0], nums[i]] = [nums[i], nums[0]]
            }
        }
        return nums
    }
}
```

And result is:

```javascript
{
  "-6,10,184": 2512,
  "-6,184,10": 0,
  "184,-6,10": 2421,
  "184,10,-6": 2508,
  "10,184,-6": 0,
  "10,-6,184": 2559
}
```

emmm

## 3.  fisher-yates

```typescript
class Solution {
    nums: number[] = []
    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return this.nums
    }

    shuffle(): number[] {
        const nums = this.nums.slice()
        for (let i = 0, j = nums.length; i < j; i++) {
            const idx = Math.floor(Math.random() * j) as number
            [nums[idx], nums[i]] = [nums[i], nums[idx]]
        }
        return nums
    }
}
```

wola

```javascript
{
  "-6,10,184": 1501,
  "-6,184,10": 1850,
  "184,-6,10": 1476,
  "184,10,-6": 1563,
  "10,184,-6": 1831,
  "10,-6,184": 1779
}
```
