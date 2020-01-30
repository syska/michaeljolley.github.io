var hostname = "http://localhost:4000";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Girls Who Code",
      category: ["parenting"],
      content: "\n    \n    Picture from UC Davis Today\n\n\nThese days, the topic of women in technology is hot.  There have been numerous articles lamenting the shortage of women in our field and the lack of girls interested or pursuing education in STEM (Science, Technology, Engineering and Mathematics) fields.\n\nAs a dad of two daughters, I often think about what their futures hold.  Like most parents, I don’t want them to feel pigeon-holed into a specific field of study or occupation.  During the course of a normal day, and usually depending on what TV show they watched last, they want to become actresses, musicians, artists, cooks, fashion designers, princesses, teachers or nurses.  Of course, at 7 and 10 years old, those are all fine aspirations.  But it sometimes puzzles me that I’ve never heard them say I want to be a scientist or software developer or engineer.\n\nOf course, we’ll support them in whatever they choose to be when they grow up, but I still feel an urge to expose them to other ideas and skills and professions while they’re young.  Even if it’s nothing more than me letting them know “hey, it’s okay to be a girl and like math or science or robots.”  Heck, who doesn’t like robots?\n\n\n    \n    Picture from Snap Circuits\n\n\nOne of the ways I’ve started exposing them to these ideas is with a kit I found online that helps teach kids about electronics.  It teaches them how circuits and resistors and sensors work.  If you’d like to check it out it’s called Snap Circuits.  No, I have no incentive to push their product and there are many on the market like it, but this one really seems to get the attention of my kids.   They have several packages you can pick up but we got the Extreme SC-750R Student Electronics Training Program.  It comes with several books to help teach how electronics work and includes over 750 experiments for us to build.\n\nOur first night with it was a hit as we built a fan with a switch, a light with a switch and connected a speaker to a click switch to show how sensors can be used like a flip switch to turn on circuits.  It was so much fun to watch their eyes get huge and fight for who would be the first one to turn on our new experiment.\n\nLike I said there are numerous systems/kits like that from different companies with the same goal but I would recommend the one we got.\n\nAnother project we’re looking to start is an automated irrigation system for our planter outside.  Being a good “geek” I own several Raspberry Pi’s and have developed several applications on them.  But one day our oldest daughter asked about the “little computer” and when I told her what kind of things are possible with it I could tell it was a “mind blown” experience for her.\n\nSo now we’re planning a project with an elevated planter in the backyard where we will setup a Raspberry Pi connected to a moisture sensor to monitor the moisture level in the box.  Our goal is to connect it to a solenoid valve connected to our home to automatically water the plants when the moisture level gets too low.  Mom &amp; Dad are fans because it means we don’t have to remember to water the plants and the 10yo thinks it’s the coolest thing ever.\n\nThere are tons of resources that are available for girls who are interested in STEM fields.  If your daughter is interested in STEM or you’d like to expose them moreso to STEM fields, research Girls Who Code and Girls In Tech.  Here in Birmingham, we have great opportunities for girls who want to get involved with Girls Who Code.  Once our girls are old enough I hope they will have the chance to participate.  Thankfully they have events at the Innovation Depot where our offices are so it will be very accessible for us.\n",
      tags: [],
      id: 0
    });
    


var store = [{
    "title": "Girls Who Code",
    "link": "/archive/2016/07/28/girlswhocode/",
    "image": null,
    "date": "July 28, 2016",
    "category": ["parenting"],
    "excerpt": "Picture from UC Davis Today These days, the topic of women in technology is hot. There have been numerous articles..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});