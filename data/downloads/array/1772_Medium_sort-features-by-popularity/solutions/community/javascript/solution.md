# Typescript Solution using Sort

**Author:** devasenaa_leetcode
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/1615781/](https://leetcode.com/problems/sort-features-by-popularity/solutions/1615781/)

---

1. Get the frequencies 
2. Sort the input array based on frequencies. 

```
function sortFeatures(features: string[], responses: string[]): string[] {
    const counts = new Map<string,number>();
    features.forEach(feature=>{
        counts.set(feature,0);
    });
    
    responses.forEach((response)=>{
        const words = response.split(" ");
        const wordsSet = new Set<string>([...words]);
        
        wordsSet.forEach(word=>{
            
           if(counts.has(word)){
               const newCount = counts.get(word)+1;
               counts.set(word, newCount);
           } 
        });
    });
    
    return features.sort((a,b)=>{
        return counts.get(b)-counts.get(a);
    });
};
```