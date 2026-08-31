# TypeScript - Sort + Line sweep

**Author:** tonyluitonylui
**Votes:** 0
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/2972910/](https://leetcode.com/problems/describe-the-painting/solutions/2972910/)

---

# Code
```typescript
type Segment = [start: number, end: number, color: number];
type Description = [start: number, end: number, mix: number];

const enum Label {
    Start = 0,
    End = 1,
}

const splitPainting = (segments: Segment[]): Description[] => {
    const endpoints: [position: number, color: number, label: Label][] = [];
    for (const [start, end, color] of segments) {
        endpoints.push([start, color, Label.Start]);
        endpoints.push([end, color, Label.End]);
    }
    endpoints.sort(
        ([pos1, color1, label1], [pos2, color2, label2]) =>
            pos1 - pos2 || color1 - color2 || label1 - label2
    );
    const result: Description[] = [];
    let [currMix, prevPos] = [0, 0];
    for (const [currPos, color, label] of endpoints) {
        if (currMix > 0 && prevPos !== currPos) {
            result.push([prevPos, currPos, currMix]);
        }
        prevPos = currPos;
        if (label === Label.Start) currMix += color;
        if (label === Label.End) currMix -= color;
    }
    return result;
};
```