# C++ || Trie || Easy

**Author:** amit5785
**Votes:** 3
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/2204873/](https://leetcode.com/problems/html-entity-parser/solutions/2204873/)

---

Here i think of simple forming a trie and inserting all the predefined entity in trie and at the end of this insert equivalent symbol that we want to replace

once we have inserted into trie we will start traversing the given text and we search for matching whenever we caught any '&' 

Code is simple and can be understood please go through it

```
class MyTrie
{
    private :
    vector<MyTrie*> children;
    char symbol; // to store the symbol which we have to replace e.g &amp -> '&'
    
    public :
    MyTrie()
    {
       children=vector<MyTrie*>(26,NULL);
       symbol='#';//By default symbol we will be '#' but at the point where an entity is ending we will replce it with equivalent symbol
    }
    
    void insert(string word,char sym)
    {
        MyTrie *root=this;
        int n=word.length();
        for(int i=0;i<n;i++)
        {
            if(root->children[word[i]-'a']==NULL)
            {
                root->children[word[i]-'a']=new MyTrie();
            }
            
            root=root->children[word[i]-'a'];
        }
        root->symbol=sym;//Here we are storing the equivalent symbul as it is end of valid entity
        return ;
    }
    
    pair<char,int> serach(string &text,int k)
    {
        MyTrie *root=this;
        int n=text.size();
        int i=k;
        for(i=k;i<n;i++)
        {
            if(text[i]>='a' && text[i]<='z')//as it has been given in question there can be any Ascii value so we are checking whether it lies within alphabet or not
			//we have entered into this bloc because the text[i] is alphabet
            {
                
               if(root->children[text[i]-'a']==NULL)
               {
                   
                   return {'0',i};//if dont matches return '0' symbol which we will use as flag to check whether match was ssuccessful or not in our main program
               }
            }
            else
            {
                return {'0',i};
            }
            root=root->children[text[i]-'a'];
            if(root->symbol!='#')//We are checking whether we have hit any vallid entity or not 
            {
                break;
            }
        }
        
        return {root->symbol,i+1};
    }
};
class Solution {
public:
    string entityParser(string text) 
    {
        MyTrie *root=new MyTrie();
        root->insert("quot",'"');
        root->insert("apos",39);
        root->insert("amp",'&');
        root->insert("gt",'>');
        root->insert("lt",'<');
        root->insert("frasl",'/');            
    
    int n=text.length(),i=0;
    string res;
    
    while(i<n)
    {
        if(text[i]=='&')
        {
           auto temp=root->serach(text,i+1);
           if(temp.first!='0' && temp.second<n && text[temp.second]==';') 
           {
               res.push_back(temp.first);
               i=temp.second+1;
               continue;
           }
        }
        
        res.push_back(text[i]);
        i++;
    }
    return res;
    }
};
```

**Upvote+= "Found Helpful" ? 1:0;
Any suggestions ,plz drop it it will improve my skill;**