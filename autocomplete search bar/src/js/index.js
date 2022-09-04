import allResults from "./info.js";

const searchInput = document.querySelector('.searchInput');
const resultsContainer = document.querySelector('.resultsContainer');

const addResult = entryObject => {
   console.log(entryObject);
   const htmlStructer = `
      <div class="w-full h-10 flex items-center gap-x-2">
         <!-- Image container -->
         <span class="w-7 h-7">
            <img src="${entryObject.img ? entryObject.img : "/assets/images/search.png"}" alt="">
         </span>
         <p class="font-medium text-base">${entryObject.title}</p>
      </div>`;
   resultsContainer.insertAdjacentHTML('afterbegin', htmlStructer)
}

searchInput.addEventListener('input', e => {
   const inputValue = e.target.value;
   const filterResults = allResults.filter(eachData => {
      return eachData.title.toLowerCase().includes(inputValue.toLowerCase().trim());
   })

   if (inputValue.length) {
      resultsContainer.classList.replace('hidden', 'flex');
      resultsContainer.innerHTML = '';
      if (inputValue.length === 1) {
         allResults.forEach(eachDataObject => {
            addResult(eachDataObject)
         })
      } else {
         if (filterResults.length !== 0) {
            filterResults.forEach(eachFilteredObject => {
               addResult(eachFilteredObject)
            })
         } else {
            addResult({title: 'Nothing found'})
         }
      }
   } else {
      resultsContainer.classList.replace('flex', 'hidden');
   }
})