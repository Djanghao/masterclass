# Typescript Union Clusters

**Author:** tal0012
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/5563584/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/5563584/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class VideoCluster {
    head: number;
    tail: number;
    size: number;
    
    constructor(head: number, tail:number, size: number = 1){
        this.head= head;
        this.tail = tail;
        this.size = size;
    }
}

class LUPrefix {
    private clustersMap: Map<number,VideoCluster>;

    constructor(n: number) {
        this.clustersMap = new Map<number, VideoCluster>();
    }

    upload(video: number): void {
        const nextCluster = this.clustersMap.get(video + 1);
        const prevCluster = this.clustersMap.get(video - 1);

        if(nextCluster || prevCluster){
            if(nextCluster && prevCluster){
                this.clustersMap.delete(nextCluster.tail);
                this.clustersMap.delete(prevCluster.head);
                this.clustersMap.delete(prevCluster.tail);

                const newHead = prevCluster.head;
                const newTail = nextCluster.tail;
                const newSize = prevCluster.size+nextCluster.size+1;
                const cluster = new VideoCluster(newHead,newTail,newSize);
                this.clustersMap.set(newHead, cluster);
                this.clustersMap.set(newTail, cluster);
            }else if(nextCluster){
                this.clustersMap.delete(nextCluster.head);
                this.clustersMap.delete(nextCluster.tail);
                this.clustersMap.set(video, nextCluster);
                this.clustersMap.set(nextCluster.tail, nextCluster);
                nextCluster.head = video;
                nextCluster.size++;
            }else{
                this.clustersMap.delete(prevCluster.tail);
                this.clustersMap.delete(prevCluster.head);
                this.clustersMap.set(video, prevCluster);
                this.clustersMap.set(prevCluster.head, prevCluster);
                prevCluster.tail = video;
                prevCluster.size++;
            }
        }else{
            this.clustersMap.set(video, new VideoCluster(video,video,1));
        }
    }

    longest(): number {
        return this.clustersMap.get(1)?.size || 0;
    }
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
```