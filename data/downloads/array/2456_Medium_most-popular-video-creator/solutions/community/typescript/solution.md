# OOP

**Author:** HarlanTheEngineer
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/5540733/](https://leetcode.com/problems/most-popular-video-creator/solutions/5540733/)

---

# Complexity
- Time complexity:
 $$O(nLog(n))$$

- Space complexity:
 $$O(n)$$

# Code
```
function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {
    const creatorsMap: Map<string, Creator> = new Map()

    for (let i = 0; i < creators.length; i++) {
        const name = creators[i]
        if (!creatorsMap.has(name)) {
            creatorsMap.set(name, new Creator())
        }
        const creator = creatorsMap.get(name)
        creator.totalViews += views[i]
        creator.videos.set(ids[i], (creator.videos.get(ids[i]) ?? 0) + views[i] )
    }

    const sortedCreators = [...creatorsMap.entries()].sort((a, b) => b[1].totalViews - a[1].totalViews)
    
    let res: string[][] = [[sortedCreators[0][0], sortedCreators[0][1].popularVideo]]
    let max = sortedCreators[0][1].totalViews

    for (let i = 1; i < sortedCreators.length; i++) {
        if (sortedCreators[i][1].totalViews === max) {
            res.push([sortedCreators[i][0], sortedCreators[i][1].popularVideo])
        } else {
            break
        }
    }
    return res
};

class Creator {
    totalViews: number;
    videos: Map<string, number>;

    constructor() {
        this.totalViews = 0
        this.videos = new Map<string, number>()
    }

    get views(): number {
        return this.totalViews
    }

    get popularVideo(): string {
        if (!this.videos.size) {
            return ''
        } else {
            return [...this.videos.entries()].sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1])[0][0]
        }
    }
}
```