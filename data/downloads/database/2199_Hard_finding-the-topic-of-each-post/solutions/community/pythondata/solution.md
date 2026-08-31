# Basic Python | Commented and Explained

**Author:** laichbr
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/4531638/](https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/4531638/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Basic python implementation using set theory and dictionary mappings 
Goal here was to avoid the API's to showcase the potential speedup and lower memory costs, which is an issue when using automation approaches. 

# Approach
<!-- Describe your approach to solving the problem. -->
Build map of words in keywords to the list of unique topic ids 
Build a unique set of topic keywords 
Build a mapping of post ids to the sorted lists of unique content ids 
Build your output tuples as the list of post id, string join of components in comma separated fashion via your mapping in the prior step 
Return a built dataframe when done 

# Complexity
- Time complexity : O(K * P * R) 
    - O(K) to loop over all keywords rows 
    - O(P) to loop over all posts 
        - In which you must do O(R) work to loop over all the row contents and set cast the lower form of them, then do O(k) work to intersect with the topic list 
        - Then which you need to do O(k) to loop the content set and O(v) to loop the values, then v log v to do the sorting 
        - In total at worst O(K + P * R * k * k * (v + v log v))
        - If k is all unique keywords and v is all the unique values associated, we can approximate k * k * (v + v log v) as K 
        - At which point it is down to O(K * P * R) 

- Space complexity : O(max(P, k*v))
    - O(k * v) words to topic ids keywords that are unique (subset of K) with their set of values 
    - O(P * v) post ids to topics listings 
    - O(P) output tuples 
    - Final dataframe is a generated data amount (not counted )

# Code
```
import pandas as pd

def find_topic(keywords: pd.DataFrame, posts: pd.DataFrame) -> pd.DataFrame:
    # build lists of topic ids as they are not a one to one mapping 
    words_to_topic_ids = collections.defaultdict(set)
    # build your set of topic set words and your words to topic id lists 
    for index, row in keywords.iterrows() : 
        words_to_topic_ids[row['word'].lower()].add(row['topic_id'])
    topic_set = set(words_to_topic_ids.keys())
    # build a list of post ids to topics as a mapping 
    post_ids_to_topics = collections.defaultdict(list) 
    # for each post in posts 
    for index, row in posts.iterrows() : 
        # get the unique word set in the content in lower form that intersects 
        content_set = set(row['content'].lower().split()).intersection(topic_set) 
        # if there is a content set 
        if len(content_set) : 
            # build a list of the content ids 
            content_ids = []
            # by looping over the content keywords 
            for content in content_set : 
                # and accessing the content topic id value 
                for val in words_to_topic_ids[content] : 
                    content_ids.append(val) 
            # then listing in sorted order as needed the content ids in set form 
            post_ids_to_topics[row['post_id']] = sorted([content_id for content_id in set(content_ids)])
        else : 
            # otherwise, it's Ambiguous! 
            post_ids_to_topics[row['post_id']] = ['Ambiguous!']
    # build your output tuples 
    output_tuples = [] 
    # since we can be in any order 
    for post_id in post_ids_to_topics.keys() : 
        output_tuples.append(tuple([post_id, ",".join(str(component) for component in post_ids_to_topics[post_id])]))
    # return the dataframe with the named components 
    return pd.DataFrame(output_tuples, columns = ['post_id', 'topic']) 
```