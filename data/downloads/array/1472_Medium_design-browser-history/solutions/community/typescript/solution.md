# 166ms (Beats: 96.67%, 92.22%) | TypeScript | JavaScript

**Author:** rcwell
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3310435/](https://leetcode.com/problems/design-browser-history/solutions/3310435/)

---

```
class BrowserHistory {
    history: string[]
    current: number

    constructor(homepage: string) {
        this.history = [homepage]
        this.current = 0
    }

    visit(url: string): void {
        this.current++
        // clears forwards after current index
        this.history = this.history.slice(0, this.current)
        this.history.push(url)
    }

    back(steps: number): string {
        this.current = Math.max(0, this.current - steps);
        return this.history[this.current]
    }

    forward(steps: number): string {
        this.current = Math.min(this.history.length - 1, this.current + steps)
        return this.history[this.current]
    }
}