# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/contain-virus/solutions/4690437/](https://leetcode.com/problems/contain-virus/solutions/4690437/)

---

# Code
```
class CircularQueue {

    constructor(capacity) {

        this._capacity = capacity;

        this._size = 0;

        this._bottom = 0;

        this._data = Array(capacity).fill(undefined);
    }

    _getCircularIndex(index) {
        const result = index % this._capacity;
        if (result < 0) result += this._capacity;
        return result;
    }

    get capacity() {
        return this._capacity;
    }

    get size() {
        return this._size;
    }

    get nextItem() {
        return this._size ? this._data[this._bottom] : undefined;
    }

    get lastItem() {
        return this._size
            ? this._data[this._getCircularIndex(this._bottom + this._size - 1)]
            : undefined;
    }

    enqueue(...items) {
        if (this._size + items.length > this._capacity)
            throw new Error("Queue capacity exceeded.");

        let queueIndex = (this._bottom + this._size) % this._capacity;
        this._size += items.length;
        for (let i = 0; i < items.length; i++) {
            this._data[queueIndex] = items[i];
            queueIndex = (queueIndex + 1) % this._capacity;
        }
    }

    dequeue() {
        if (!this._size) return undefined;

        let result = this._data[this._bottom];
        this._bottom = (this._bottom + 1) % this._capacity;
        this._size--;

        return result;
    }

    clear() {
        this._size = 0;
    }
}

let qr = new CircularQueue(2500);
let qc = new CircularQueue(2500);

let threats = [];
let fences = [];
function initLabel(x) {
    while (x >= threats.length) {
        threats.push(0);
        fences.push(0);
    }
    threats[x] = 0;
    fences[x] = 0;
}

let DIR_R = [0, 0, 1, -1];
let DIR_C = [1, -1, 0, 0];

var containVirus = function (isInfected) {
    let n = isInfected[0].length;
    let m = isInfected.length;
    let label = 0;
    let res = 0;

    function bfs(ir, ic, label) {
        qr.enqueue(ir);
        qc.enqueue(ic);
        let labelState = (label << 3) | 2;
        isInfected[ir][ic] = labelState;
        initLabel(label);

        while (qr.size) {
            let r = qr.dequeue();
            let c = qc.dequeue();

            for (let i = 0; i < 4; i++) {
                let rr = r + DIR_R[i];
                let cc = c + DIR_C[i];
                let state = isInfected[rr]?.[cc];
                if (state == undefined) continue;

                switch (state & 7) {
                    case 0: {
                        isInfected[rr][cc] = (label << 3) | 3;
                        fences[label]++;
                        threats[label]++;
                        break;
                    }
                    case 1: {
                        qr.enqueue(rr);
                        qc.enqueue(cc);
                        isInfected[rr][cc] = labelState;
                        break;
                    }
                    case 3: {
                        fences[label]++;
                        if ((state >> 3) != label) {
                            threats[label]++;
                            isInfected[rr][cc] = (label << 3) | 3;
                        }
                        break;
                    }
                }
            }
        }
    }

    function isStillThreaten(r, c, lockedLabel) {
        for (let i = 0; i < 4; i++) {
            let rr = r + DIR_R[i];
            let cc = c + DIR_C[i];
            let state = isInfected[rr]?.[cc];
            if ((state & 7) == 2 && (state >> 3) != lockedLabel) return true;
        }
    }

    while (true) {
        label = 0;
        let lockedLabel = 0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (isInfected[r][c] == 1) {
                    bfs(r, c, label);
                    if (threats[label] > threats[lockedLabel]) lockedLabel = label;
                    label++;
                }
            }
        }

        if (!label) return res;

        res += fences[lockedLabel];

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if ((isInfected[r][c] & 7) == 3) {
                    if (isStillThreaten(r, c, lockedLabel)) isInfected[r][c] = 1;
                    else isInfected[r][c] = 0;
                }
            }
        }

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                let state = isInfected[r][c];
                if ((state & 7) == 2) {
                    if ((state >> 3) == lockedLabel) isInfected[r][c] = 4;
                    else isInfected[r][c] = 1;
                }
            }
        }
    }
};
```