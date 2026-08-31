# Predict The Winner (Enterprise Edition)

**Author:** kingjassix
**Votes:** 1
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/4443522/](https://leetcode.com/problems/predict-the-winner/solutions/4443522/)

---


# Code
```
class Logger {
    constructor(private namespace: string) {}

    public info(...args: any[]): void {
        console.log(`[${this.namespace}] ->`, ...args)
    }
}

class PubSub<TState> {
    private listeners: Map<string, Array<(state) => void>> = new Map();

    public listen(event: string, cb: (state: TState) => void) {
        const oldListeners = this.listeners.get(event) ?? []

        this.listeners.set(event, [...oldListeners, cb])
    }

    public emit(event: string, state: TState) {
        const listeners = this.listeners.get(event)

        listeners?.map((listener) => {
            listener(state)
        })
    }
}

enum Players {
    FIRST = "first.player",
    SECOND = "second.player"
}

class Solution {
    constructor(private nums: number[]) {}

    private pubsub: PubSub<number> = new PubSub<number>()
    private logger: Logger = new Logger("Solution")

    private scores: Record<Players, number> = {
        [Players.FIRST]: 0,
        [Players.SECOND]: 0,
    }

    private afterInit() {
        this.pubsub.listen(Players.FIRST, (state) => {
            this.scores[Players.FIRST] += state
        })
    
        this.pubsub.listen(Players.SECOND, (state) => {
            this.scores[Players.SECOND] += state
        })
    }

    private loop(startIndex: number = 0, lastIndex: number = this.nums.length - 1): number {
        if (startIndex === lastIndex) {
            return this.nums[startIndex]
        }

        const startPlayer = this.nums[startIndex] - this.loop(startIndex + 1, lastIndex)
        const lastPlayer = this.nums[lastIndex] - this.loop(startIndex, lastIndex - 1)

        return Math.max(startPlayer, lastPlayer)
    }

    public execute(): boolean {
        this.afterInit()

        const executionResult = this.loop()
        this.logger.info(this.scores, executionResult)

        return executionResult >= 0
    }
}

function predictTheWinner(nums: number[]): boolean {
    const solution = new Solution(nums)

    return solution.execute();
}
```