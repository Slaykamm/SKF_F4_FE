import {useMemo} from 'react';

export const useSortedRecipies = (recipies, sort) => {
    const sortedReceipes = useMemo(()=>{
        if (sort) {
          return [...recipies].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return recipies;
    
      }, [sort, recipies])

      return sortedReceipes;

}

export const useRecipies = (recipies, sort, query) => {
    const sortedReceipes = useSortedRecipies(recipies, sort);

    const sortedAndSearchedRecepies = useMemo(()=>{
        return sortedReceipes.filter(recipie => recipie.title.toLowerCase().includes(query))
      }, [query, sortedReceipes])


    return sortedAndSearchedRecepies;
    

}