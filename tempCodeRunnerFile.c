#include <stdio.h>
#include <stdlib.h>

void merge(int *arr[], int l, int mid, int h)
{
    int i = 0, j = mid, b[100], k = 0;
    while(i < mid && j < h)
    {
        if(arr[i] < arr[j])
            b[k++] = arr[i++];  
        else
            b[k++] = arr[j++];  
    }
    for(; i < mid; i++) b[k++] = arr[i]; 
    for(; j < h; j++) b[k++] = arr[j]; 
}

int main()
{
    int arr[] = {1, 3, 5, 7, 9, 2, 4, 6, 8};    
    printf("Shivam");
    return 0;
}