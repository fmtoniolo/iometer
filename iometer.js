//first  column: avatar
function getAvatar(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a);
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.thumbnail_url;
}

//second  column: the input (character name)

//third  column: class
function getClass(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a);
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.class;
}

//fourth  column: specialization
function getSpec(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a);
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.active_spec_name;
}

//fifth  column: item level equiped
function getIlvl(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=gear");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.gear.item_level_equipped;
}

//sixth  column: active covenant
function getCov(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=covenant");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.covenant["name"];
}

//seventh  column: renown
function getRen(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=covenant");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.covenant.renown_level; 
}

//eighth  column: mythic plus score (current season)
function getIo(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=mythic_plus_scores_by_season%3Acurrent");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.mythic_plus_scores_by_season[0].scores.all;
}

//ninth  column: season 1 raid progression
function getRaidS1(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=raid_progression");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.raid_progression ["castle-nathria"] ["summary"]; 
}

//tenth  column: season 2 raid progression
function getRaidS2(a) {
  if (a == "") return "";
    let url =
      "https://raider.io/api/v1/characters/profile?region=us&realm=Azralon&name=";
    let requestURL = url.concat(a + "&fields=raid_progression");
    let response = UrlFetchApp.fetch(requestURL);
    let data = JSON.parse(response);
    return data.raid_progression ["sanctum-of-domination"] ["summary"]; 
}





















