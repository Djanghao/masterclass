# typescript solution without using Priority Queue and BigInt

**Author:** GaryChanCCO
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2563132/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2563132/)

---

```typescript
    function maxPerformance(n: number, speed: number[], efficiency: number[], k: number): number {
        const indByEffDesc: number[] = Array(n)
            .fill(0)
            .map((v, i) => i)
            .sort((a, b) => efficiency[b] - efficiency[a]);

        const speed_desc = speed.slice().sort((a, b) => b - a);
        let speedSum = 0;
        let speedSumNextInd = 0;
        for (; speedSumNextInd < k - 1; speedSumNextInd++) speedSum += speed_desc[speedSumNextInd];

        function findInfInd(target: number): number {
            let start = 0;
            let end = speed_desc.length;
            while (start < end) {
                const mid = (start + end) >> 1;
                if (Math.abs(speed_desc[mid]) < target || speed_desc[mid] === target) end = mid;
                else start = mid + 1;
            }
            return start;
        }

        let max = 0;
        let resultSpeedSum = Number.NaN;
        let resultMinEff = Number.NaN;
        for (let i = 0; i < n; i++) {
            const ind = indByEffDesc[i];
            const minEff = efficiency[ind];
            const speed_minEff = speed[ind];
            const speed_descInd = findInfInd(speed_minEff);
            if (speed_descInd < speedSumNextInd) {
                speedSum += speed_desc[speedSumNextInd++] ?? 0;
                if (speedSum * minEff > max) {
                    max = speedSum * minEff;
                    resultSpeedSum = speedSum;
                    resultMinEff = minEff;
                }
                speedSum -= speed_desc[speed_descInd];
            } else {
                const resultSpeedSum_ = speedSum + speed_desc[speed_descInd];
                if (resultSpeedSum_ * minEff > max) {
                    max = resultSpeedSum_ * minEff;
                    resultSpeedSum = resultSpeedSum_;
                    resultMinEff = minEff;
                }
            }
            speed_desc[speed_descInd] *= -1;
            while (speed_desc[speedSumNextInd] < 0) speedSumNextInd++;
        }

        const mod = 1e9 + 7;
        const sqrtMinEff = Math.floor(Math.sqrt(resultMinEff));
        const speedSum_mod = resultSpeedSum % mod;
        return (
            (((((speedSum_mod * sqrtMinEff) % mod) * sqrtMinEff) % mod) +
                ((speedSum_mod * (resultMinEff - sqrtMinEff * sqrtMinEff)) % mod)) %
            mod
        );
    }
```