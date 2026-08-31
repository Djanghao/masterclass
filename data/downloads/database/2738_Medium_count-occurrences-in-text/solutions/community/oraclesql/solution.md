# ✅ Video Solution - Clean code, Correct

**Author:** Piotr_Maminski
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-occurrences-in-text/solutions/6037086/](https://leetcode.com/problems/count-occurrences-in-text/solutions/6037086/)

---

# Upvote if I should write premium solutions and if anyone reads them. That way I will know. 

https://www.youtube.com/watch?v=AFiCMVHzNQA

# Clean code:

```pythondata [pandas1(better)]
import pandas as pd

def count_occurrences(files: pd.DataFrame) -> pd.DataFrame:
    """
    Count occurrences of market sentiment words 'bull' and 'bear' in text content.
    
    Args:
        files (pd.DataFrame): DataFrame containing a 'content' column with text data
        
    Returns:
        pd.DataFrame: DataFrame with word counts for 'bull' and 'bear'
    """
    sentiment_words = {
        'bull': r'\\sbull\\s',
        'bear': r'\\sbear\\s'
    }
    
    word_counts = {
        word: files['content'].str.contains(pattern).sum()
        for word, pattern in sentiment_words.items()
    }
    
    return pd.DataFrame({
        'word': list(word_counts.keys()),
        'count': list(word_counts.values())
    })
```
```pythondata [pandas2]
import pandas as pd

def count_occurrences(files: pd.DataFrame) -> pd.DataFrame:
    """
    Count unique files containing 'bull' and 'bear' words.
    
    Args:
        files: DataFrame with 'content' and 'file_name' columns
        
    Returns:
        DataFrame with word counts for 'bull' and 'bear'
    """
    def count_word_in_files(word: str) -> int:
        pattern = fr"(\\s+{word}\\s+)"
        return files[
            files["content"].str.contains(pattern, regex=True, case=False)
        ]["file_name"].nunique()
    
    words = ["bull", "bear"]
    counts = [count_word_in_files(word) for word in words]
    
    return pd.DataFrame({
        "word": words,
        "count": counts
    })
```
```mysql [MySQL(short)]
SELECT 'bull' AS word, SUM(content LIKE '% bull %') AS count
FROM Files
UNION ALL
SELECT 'bear' AS word, SUM(content LIKE '% bear %') AS count
FROM Files
```
```mysql [Correct CTE MySQL,MSSQLServer,Oracle,PostreSQL]
WITH word_counts AS (
    SELECT 
        'bull' AS word,
        COUNT(*) AS count
    FROM Files 
    WHERE content LIKE '% bull %'
    
    UNION ALL
    
    SELECT 
        'bear' AS word,
        COUNT(*) AS count
    FROM Files 
    WHERE content LIKE '% bear %'
)
SELECT 
    word,
    count
FROM word_counts;

```
# I'll expand if someone even reads it.
# Have a nice day! <3
![image.png](./images/0.png)
