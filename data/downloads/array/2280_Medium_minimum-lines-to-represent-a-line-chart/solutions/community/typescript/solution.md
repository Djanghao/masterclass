# Typescript: tricky well commented solution - avoid division

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/3020205/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/3020205/)

---

# Code
```
function minimumLines(stockPrices: number[][]): number {
    if (stockPrices.length <= 2) return stockPrices.length - 1;

    // sort stocks by days
    stockPrices.sort((p1, p2) => {return p1[0] - p2[0]});
    
    // Main thing -> y = mx + c
    let min: number = 0;
    let dy_prev: bigint,
        dx_prev: bigint;

    for (let i = 0; i < stockPrices.length - 1; i++) {
        const [[x0, y0], [x1, y1]] = [stockPrices[i], stockPrices[i + 1]];

        const dy_cur = BigInt(y0 - y1), 
              dx_cur = BigInt(x0 - x1);

        // d_cur = (y0 - y1) / (x0 - x1) => dy_cur / dx_cur
        // d_cur should be equals d_prev => dy_cur / dx_cur == dy_prev / dx_prev 
        // ==> dy_cur * dx_prev == dy_prev * dx_cur
        if ((! dy_prev && ! dx_prev) || (dy_prev * dx_cur != dy_cur * dx_prev)) {
            dy_prev = dy_cur;
            dx_prev = dx_cur;
            min += 1;
        }
    }

    return min;
};
```