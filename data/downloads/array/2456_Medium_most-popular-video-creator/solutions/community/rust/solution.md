# Rust | 73ms

**Author:** RBird111
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/4094509/](https://leetcode.com/problems/most-popular-video-creator/solutions/4094509/)

---

# Code
```
use std::collections::BTreeMap;

impl Solution {
    pub fn most_popular_creator(
        creators: Vec<String>,
        ids: Vec<String>,
        views: Vec<i32>,
    ) -> Vec<Vec<String>> {
        let mut max_views = -1;
        // Creator Map = 
        //     { Creator: (Total Views, Most Viewed Video ID, Most Views on Video) }
        let mut creator_map: BTreeMap<String, (i64, String, i64)> = BTreeMap::new();
        creators
            .into_iter()
            .zip(ids.into_iter().zip(views.into_iter().map(|v| v as i64)))
            // (Streamer, (Video Id, Video Views))
            .for_each(|(n, (i, v))| {
                creator_map
                    .entry(n)
                    .and_modify(|(t, id, m)| {
                        *t += v;
                        max_views = max_views.max(*t);

                        if v == *m && id.bytes().gt(i.bytes()) {
                            *id = i.clone()
                        }

                        if v > *m {
                            *m = v;
                            *id = i.clone()
                        }
                    })
                    .or_insert({
                        max_views = max_views.max(v);
                        (v, i, v)
                    });
            });

        creator_map
            .into_iter()
            .filter_map(|(n, (v, i, _))| (v == max_views).then(|| vec![n, i]))
            .collect()
    }
}
```