const data = {
  "Entries": [
      {
          "NodeGUID": "d2aa51f5-5497-41b7-aa87-7e3b6fc34a42",
          "Title": "Manual A - A 1",
          "BodyPreview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci...",
          "Type": "Manual",
          "Url": "~/en-us/knowledge/manual-a-a-1-d2aa51f5-5497-41b7-aa87-7e3b6fc34a42",
          "ModifiedDate": "2022-11-15T21:13:37.0208652",
          "ModifiedDateFormatted": "15.11.2022"
      },
      {
          "NodeGUID": "f1b9d765-abcb-4d4a-8057-4fd4e0662349",
          "Title": "Quadpump",
          "BodyPreview": "some body@",
          "Type": "Component",
          "Url": "~/en-us/knowledge/quadpump-f1b9d765-abcb-4d4a-8057-4fd4e0662349",
          "ModifiedDate": "2022-11-13T02:16:13.5858099",
          "ModifiedDateFormatted": "13.11.2022"
      },
      {
          "NodeGUID": "7e8a8c89-ee83-4535-ad1f-3cf63b083099",
          "Title": "Manual A - A 2",
          "BodyPreview": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci...",
          "Type": "Manual",
          "Url": "~/en-us/knowledge/manual-a-a-2-7e8a8c89-ee83-4535-ad1f-3cf63b083099",
          "ModifiedDate": "2022-10-19T07:38:00.8009816",
          "ModifiedDateFormatted": "19.10.2022"
      },
      {
          "NodeGUID": "e1ef2601-ea0a-437c-ae41-48047b82aeb0",
          "Title": "dFw v2",
          "BodyPreview": "",
          "Type": "Firmware",
          "Url": "~/en-us/knowledge/dfw-v2-e1ef2601-ea0a-437c-ae41-48047b82aeb0",
          "ModifiedDate": "2022-10-16T13:45:38.1929027",
          "ModifiedDateFormatted": "16.10.2022"
      },
      {
          "NodeGUID": "75052aa6-2b40-43b0-b3f7-68b94b6e857d",
          "Title": "dFw v1.1",
          "BodyPreview": "",
          "Type": "Firmware",
          "Url": "~/en-us/knowledge/dfw-v1-1-75052aa6-2b40-43b0-b3f7-68b94b6e857d",
          "ModifiedDate": "2022-10-16T13:20:31.6660997",
          "ModifiedDateFormatted": "16.10.2022"
      },
      {
          "NodeGUID": "6ef5722b-0f74-486d-90b6-de7bd1c0f5a4",
          "Title": "Firmware v2",
          "BodyPreview": "Test test test@test test",
          "Type": "Firmware",
          "Url": "~/en-us/knowledge/firmware-v2-6ef5722b-0f74-486d-90b6-de7bd1c0f5a4",
          "ModifiedDate": "2022-10-10T10:05:27.7778987",
          "ModifiedDateFormatted": "10.10.2022"
      },
      {
          "NodeGUID": "ddea01e5-7db4-412f-99c7-ab14e57b8b2e",
          "Title": "Firmware v1",
          "BodyPreview": "asdf",
          "Type": "Firmware",
          "Url": "~/en-us/knowledge/firmware-v1-ddea01e5-7db4-412f-99c7-ab14e57b8b2e",
          "ModifiedDate": "2022-10-03T22:27:39.8880243",
          "ModifiedDateFormatted": "03.10.2022"
      }
  ],
  "CurrentKnowledgeEntryTitle": null,
  "Pages": {
      "PageSize": 4,
      "Page": 1
  }
}
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
  return `<div class = "md:border-none border-b border-lightGray">
                    <p class="mb-1">${entry.ModifiedDateFormatted}</p>
                    <p class="ellipsis font-bold mb-2">${entry.Title}</p>
                    <p class="text-[#929497] font-bold mb-4">Type: <span class="font-normal">${entry.Type}</span></p>
                    <p class="mb-6">
                        <a class="text-orange font-bold hover:text-orangeDarker active:text-orangeDarkest" href="${entry.Url}">Show</a>
                    </p>
                </div>`;
}
InitialLoad();
