const UPI_REGEX =/\b[a-zA-Z0-9._-]+@[a-zA-Z]+\b/g;
const EMAIL_REGEX=/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g
const PHONE_REGEX=/(?:\+91[- ]?)?[6-9]\d{9}/g;
const CARD_REGEX=/\b(?:\d[ -]*?){13,16}\b/g;
const AADHAAR_REGEX=/\b[2-9]\d{3}[ -]?\d{4}[ -]?\d{4}\b/g;
const PAN_REGEX= /\b[A-Z]{5}\d{4}[A-Z]\b/g;
const URL_REGEX =/https?:\/\/[^\s]+/g;
const IP_REGEX =/\b(?:\d{1,3}\.){3}\d{1,3}\b/g;


export function regexMasker(text){
     
    const emailMatches = text.match(EMAIL_REGEX) || [];
    text = text.replace(EMAIL_REGEX,"[EMAIL]");

    const upiMatches =text.match(UPI_REGEX) || [];
    text = text.replace(UPI_REGEX,"[UPI_ID]");

    const phoneMatches =text.match(PHONE_REGEX)||[];
    text = text.replace(PHONE_REGEX,"[PHONE]");

    const cardMatches =text.match(CARD_REGEX) || [];
    text = text.replace(CARD_REGEX,"[CREDIT_CARD]");

    const aadhaarMatches=text.match(AADHAAR_REGEX)||[];
    text=text.replace(AADHAAR_REGEX,"[AADHAAR]");

    const panMatches =text.match(PAN_REGEX) || [];
    text = text.replace(PAN_REGEX,"[PAN]");

    const urlMatches=text.match(URL_REGEX)||[];
    text=text.replace(URL_REGEX,"[URL]");

    const ipMatch=text.match(IP_REGEX)||[];
    text=text.replace(IP_REGEX,"[IP_ADDRESS]");
    

    return {
        maskedText: text,

        stats:{
            emails: emailMatches.length,
            phones: phoneMatches.length,
            cards: cardMatches.length,
            aadhaar:aadhaarMatches.length,
            pan: panMatches.length,
            upi: upiMatches.length,
            url:urlMatches.length,
            ips:ipMatch.length,
        }
    };
}