# maths as we have known so far --

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5881357/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/solutions/5881357/)

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
```c []
i,j,E,e[100],ee[100],EE[100],l1,l2;long L;long validSubstringCount(char* s2, char* s1)
{
    if ((l1=strlen(s1)) > (l2=strlen(s2))) return 0;for(;*s1;++s1)(*s1)-=32;s1-=l1;for(;*s2;++s2)(*s2)-=32;s2-=l2;
    for(char c='A';c<='Z';++c)e[c]=0;
    for(;*s1;++s1)++e[*s1];free(s1-l1);
    for(char c='A';c<='Z';++c)ee[c]=EE[c]=0;
    for(i=0;i<l2;++i)++ee[s2[i]];
    i=L=0;
    {
        E=1;for(char c='A';c<='Z'&&E;++c)if(ee[c]<e[c])E=0;
        if(!E)return 0;
        j=i,++EE[s2[j]];E=1;for(char c='A';c<='Z'&&E;++c)if(EE[c]<e[c])E=0;while(!E&&j+1<l2)
        {
            ++j,++EE[s2[j]];
            E=1;for(char c='A';c<='Z'&&E;++c)if(EE[c]<e[c])E=0;
        }
        L+=(l2-1)-j+1;
    }
    for(++i;i+l1<=l2;++i)
    {
        --EE[s2[i-1]];
        E=1;for(char c='A';c<='Z'&&E;++c)if(EE[c]<e[c])E=0;
        while(!E&&j+1<l2)
        {
            ++j,++EE[s2[j]];
            E=1;for(char c='A';c<='Z'&&E;++c)if(EE[c]<e[c])E=0;
        }
        if(!E)break;
        L+=(l2-1)-j+1;
    }
    return free(s2),L;
}
```