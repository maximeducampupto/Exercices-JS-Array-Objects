/**
 * Created by sstienface on 04/12/2018.
 */


var arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}


];

let currentId = 0;

function showUser()
{
    $('img').attr('src', arrObj[currentId].avatar);
    $('p').text(`${arrObj[currentId].person} (${arrObj[currentId].age})`);
}

function showAllUsers()
{

    $.each(arrObj, function(item)
    {
        let div = $('<div></div>').addClass('person-wrapper'),
            img = $('<img>').attr('src', `${arrObj[item].avatar}`),
            p   = $("<p></p>").text(`${arrObj[item].person} (${arrObj[item].age})`);

        div.append(img).append(p);

        $('.list_wrapper').append(div);
    });
}


$('#next').click(function() {
    if (currentId < 2)
    {
        currentId++;
        showUser(currentId);
    }
});

$('#previous').click(function() {
    if (currentId > 0)
    {
        currentId--;
        showUser(currentId);
    }
});


showUser(currentId);
