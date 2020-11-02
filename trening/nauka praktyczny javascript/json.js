/*const aniaml = JSON.parse('{"type":"cat","age":6}');
console.table(aniaml);
*/


function x(title, content, keywords, date) {
    const blog = {
        title: title,
        content: content,
        word: keywords,
        date: date
    };



    const bloger = JSON.stringify(blog);
    return bloger;
}