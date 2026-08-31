# TypeScript - 100% Faster [Priority Queue]

**Author:** gpambasana
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2968377/](https://leetcode.com/problems/single-threaded-cpu/solutions/2968377/)

---

# Code
```
function getOrder(tasks: number[][]): number[] {
    const { length: totalTasks } = tasks;
    
    for (let i = 0; i < totalTasks; i++)
        tasks[i].push(i);

    tasks.sort(([t1,], [t2,]) => t1 - t2);

    const cpu = new MinPriorityQueue({
        compare: (t1: number[], t2: number[]): number =>
            t1[1] === t2[1] ? t1[2] - t2[2] : t1[1] - t2[1],
    }), order: number[] = [];

    let t = tasks[0][0], i = 0;

    while (cpu.size() > 0 || i < totalTasks) {
        for (; i < totalTasks && t >= tasks[i][0]; i++)
            cpu.enqueue(tasks[i]);

        if (cpu.size() > 0) {
            const { 1: time, 2: idx } = cpu.dequeue();
            order.push(idx);
            t += time;
        } else t = tasks[i][0];
    }

    return order;
}
```