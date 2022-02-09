function call(cate) {
    var subcate = ""
    if (cate !== 'all') {
        subcate = `&category=${cate}`
    }

    $.ajax({
        type:'GET',
        url:`https://newsapi.org/v2/top-headlines?country=kr&apiKey=6060806b77484630b2f4792d92e9b23e${subcate}`,
        dataType:'json',
        success:function(getdata){
            console.log(getdata)
            usedata(getdata)
        },
        error:function(xhr){
            console.log(xhr.status + '/' + xhr.errorText )
        }
    })
}
call ('all')

function usedata(data) {
    $('#content .article').remove()
    var elem = `<ul class="article">`
    for (let i in data.articles) {
        elem += `<li>`
        elem += `<h2>${data.articles[i].title}</h2>`
        elem += `<img src="${data.articles[i].urlToImage}" alt="">`
        elem += `<p>${data.articles[i].description}</p>`
        elem += `<div>${data.articles[i].author}</div>`
        elem += `</li>`
    }
    elem += `</ul>`
    $('#content').append(elem)
}

$('.tabTit a').on ('click', function(){
    var category = $(this).attr('href')
    call(category)
    return false
})