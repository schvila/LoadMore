var data = {
  Entries: [
    {
      Title: "entry1",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-30T00:00:00",
      ModifiedDateFormated: "30.1.2010",
    },
    {
      Title: "entry2",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-10T00:00:00",
      ModifiedDateFormated: "10.1.2010",
    },
    {
      Title: "entry3",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-15T00:00:00",
      ModifiedDateFormated: "15.1.2010",
    },
    {
      Title: "entry4",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-20T00:00:00",
      ModifiedDateFormated: "20.1.2010",
    },
    {
      Title: "entry5",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-25T00:00:00",
      ModifiedDateFormated: "25.1.2010",
    },
    {
      Title: "entry6",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-10T00:00:00",
      ModifiedDateFormated: "10.1.2010",
    },
    {
      Title: "entry7",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-15T00:00:00",
      ModifiedDateFormated: "15.1.2010",
    },
    {
      Title: "entry8",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-20T00:00:00",
      ModifiedDateFormated: "20.1.2010",
    },
    {
      Title: "entry9",
      Type: null,
      Url: "google.com",
      ModifiedDate: "2010-01-25T00:00:00",
      ModifiedDateFormated: "25.1.2010",
    },
  ],
  Pages: {
    PageSize: 3,
    Page: 1,
  },
};
function InitialLoad() {
  var loadMoreBtn = document.getElementById("load-more");
  if (data.Entries.length > data.Pages.PageSize) {
    loadMoreBtn.addEventListener("click", () => {
      data.Pages.Page++;
      LoadPage();
    });
  } else {
    loadMoreBtn.style.display = "none";
  }
  LoadPage();
}
function LoadPage() {
  var start = (data.Pages.Page - 1) * data.Pages.PageSize;
  var end = (data.Pages.Page - 1) * data.Pages.PageSize + data.Pages.PageSize;
  var pageEntries = data.Entries.slice(start, end);
  var recentUpdates = document.getElementById("recent-updates");
  recentUpdates.innerHTML = pageEntries
    .map((entry) => createHmlEntry(entry))
    .join("");
  if (end >= data.Entries.length) {
    var loadMoreBtn = document.getElementById("load-more");
    loadMoreBtn.style.display = "none";
  }
}
function createHmlEntry(entry) {
  var newDiv = `<div class = "md:border-none border-b border-lightGray">
                    <p class="mb-1">${entry.ModifiedDateFormated}</p>
                    <p class="ellipsis font-bold mb-2">${entry.Title}</p>
                    <p class="text-[#929497] font-bold mb-4">Type: <span class="font-normal">${entry.Type}</span></p>
                    <p class="mb-6">
                        <a class="text-orange font-bold hover:text-orangeDarker active:text-orangeDarkest" href="${entry.Url}">Show</a>
                    </p>
                </div>`;
  return newDiv;
}
InitialLoad();
