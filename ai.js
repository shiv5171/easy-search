   // Mock data for districts and their popular locations
   const locationsData = {
  "agra": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  "aligarh": ["Aligarh Fort", "Maulana Azad Library", "Khereshwar Temple"],
  "allahabad": ["Triveni Sangam", "Allahabad Fort", "Khusro Bagh"],
  "ambedkar nagar": ["Ramabai Park", "Ambedkar Stupa", "Shaheed Smarak"],
  "amethi": ["Hanumangarhi Temple", "Sanaiya Dam", "Nandmahar Dham"],
  "amroha": ["Jama Masjid", "Dargah Shah Vilayat", "Tulsi Park"],
  "auraiya": ["Etawah Safari Park", "Mehamad Khan Ka Maqbara", "Jal Jeevan Park"],
  "azamgarh": ["Kishori Sagar", "Govt Museum", "Dattatreya Temple"],
  "baghpat": ["Yamuna River Bank", "Baliyan Garden", "Valmiki Ashram"],
  "bahraich": ["Chittaura Jheel", "Dargah Sharif", "Katarniaghat Wildlife Sanctuary"],
  "ballia": ["Bhrigu Ashram", "Surha Tal Lake", "Chirand Excavation Site"],
  "balrampur": ["Devi Patan Temple", "Suhelwa Wildlife Sanctuary", "Balrampur Museum"],
  "banda": ["Kalinjar Fort", "Shivji Temple", "Ken River"],
  "barabanki": ["Dewa Sharif", "Parijaat Tree", "Lodheswar Mahadev Temple"],
  "bareilly": ["Trivati Nath Temple", "Alakhnath Temple", "Fun City Amusement Park"],
  "basti": ["Barah Jyotirlinga Temple", "Katailiya Jungle", "Chando Tal"],
  "bhadohi": ["Sita Samahit Sthal", "Bhadrakaali Mandir", "Hariharnath Mandir"],
  "bijnor": ["Vidur Kuti", "Jama Masjid", "Hastinapur Wildlife Sanctuary"],
  "bulandshahr": ["Kala Aam", "Belon Temple", "Anoopshahr"],
  "chandauli": ["Devdari Waterfall", "Lakhaniya Dari Waterfall", "Chandraprabha Wildlife Sanctuary"],
  "chitrakoot": ["Gupt Godavari Caves", "Kamtanath Temple", "Ram Ghat"],
  "deoria": ["Hanuman Mandir", "Barhaj Park", "Ramrekha Ghat"],
  "etah": ["Pachraha Lake", "Kaila Devi Temple", "Shitalnath Temple"],
  "etawah": ["Etawah Safari Park", "Sarsai Nawar Wetland", "Chakor Park"],
  "faizabad": ["Ram Janmabhoomi", "Guptar Ghat", "Naya Ghat"],
  "farrukhabad": ["Kampil Fort", "Fatehgarh Cantonment", "Sankisa Temple"],
  "fatehpur": ["Bhitaura Ghat", "Baba Harinarayan Ashram", "Bindki Fort"],
  "firozabad": ["Shri Hanuman Temple", "Glass Industrial Center", "Tundla"],
  "gautam buddha nagar": ["India Expo Mart", "Stupa 18 Gallery", "Worlds of Wonder"],
  "ghaziabad": ["Shipra Mall", "Drizzling Land", "Swarna Jayanti Park"],
  "ghazipur": ["Lord Cornwallis Tomb", "Kankar Majra Temple", "Chitarkut Dham"],
  "gonda": ["Devi Patan Temple", "Saryu River", "Colonelganj Town"],
  "gorakhpur": ["Gorakhnath Temple", "Ramgarh Taal", "Geeta Vatika"],
  "hamirpur": ["Kalinjar Fort", "Chakreshwar Temple", "Rath Town"],
  "hapur": ["Garhmukteshwar", "Dhaulana", "Pilkhuwa"],
  "hardoi": ["Sandi Bird Sanctuary", "Naimisharanya Temple", "Madhoganj"],
  "hathras": ["Raja Mandir", "Mahamaya Temple", "Jalesar Fort"],
  "jalaun": ["Jalaun Fort", "Kalpi City", "Betwa River"],
  "jaunpur": ["Shahi Bridge", "Atala Mosque", "Jaunpur Fort"],
  "jhansi": ["Jhansi Fort", "Rani Mahal", "Barua Sagar"],
  "kannauj": ["Kanya Kubjeshwar Temple", "Archaeological Museum", "Perfume City"],
  "kanpur": ["Allen Forest Zoo", "Green Park Stadium", "Blue World Theme Park"],
  "kasganj": ["Soron Shukar Kshetra", "Patna Bird Sanctuary", "Makanpur Dargah"],
  "kaushambi": ["Prabhas Giri", "Sheetla Temple", "Kara Dham"],
  "kheri": ["Dudhwa National Park", "Kishanpur Wildlife Sanctuary", "Shiv Temple"],
  "kushinagar": ["Mahaparinirvana Temple", "Ramabhar Stupa", "Meditation Park"],
  "lalitpur": ["Deogarh Temple", "Matatila Dam", "Talbehat Fort"],
  "lucknow": ["Bara Imambara", "Rumi Darwaza", "Ambedkar Memorial Park"],
  "mahoba": ["Kakramath Temple", "Rahila Sagar", "Sun Temple"],
  "mainpuri": ["Famous Jain Temples", "Mainpuri Fort", "Kursanda"],
  "mathura": ["Shri Krishna Janmabhoomi", "Govardhan Hill", "Dwarkadhish Temple"],
  "mau": ["Mubarakpur Weaving Town", "Town Park", "Dargah Hazrat Abbas"],
  "meerut": ["Augharnath Temple", "Gandhi Bagh", "Suraj Kund"],
  "mirzapur": ["Vindhyavasini Temple", "Chunar Fort", "Siddhanath Waterfall"],
  "moradabad": ["Brass Handicrafts", "Jama Masjid", "Prem Wonderland"],
  "muzaffarnagar": ["Shukratal", "Ganeshdham", "Bhuteshwar Temple"],
  "pilibhit": ["Pilibhit Tiger Reserve", "Gauri Shankar Temple", "Chuka Beach"],
  "pratapgarh": ["Bela Bhawani Temple", "Kot Fort", "Purwa Waterfall"],
  "prayagraj": ["Triveni Sangam", "Kumbh Mela", "Anand Bhavan"],
  "raebareli": ["Indira Gandhi Memorial Botanical Garden", "Behta Bridge", "Samaspur Bird Sanctuary"],
  "rampur": ["Raza Library", "Rampur Fort", "Gandhi Samadhi"],
  "saharanpur": ["Shakumbhri Devi Temple", "Company Garden", "Baba Lal Das Temple"],
  "sant kabir nagar": ["Maghar Dham", "Amrut Kund", "Kabir Chaura"],
  "shahjahanpur": ["Shahjahanpur Museum", "Town Hall", "Jungles of Shahjahanpur"],
  "shamli": ["Shukratal", "Hanuman Dham", "Karoda Fort"],
  "shravasti": ["Jetavana Monastery", "Anathapindika Stupa", "Angulimala Stupa"],
  "siddharthnagar": ["Kapilvastu Stupa", "Bansi Town", "Naugarh Wildlife Sanctuary"],
  "sitapur": ["Naimisharanya", "Vishwanath Dham", "Misrikh Teerth"],
  "sonbhadra": ["Vindhyachal Hills", "Rihand Dam", "Kaimoor Wildlife Sanctuary"],
  "sultanpur": ["Vishnu Mandir", "Pariyatra Hills", "Kali Ji Temple"],
  "unnao": ["Nawabganj Bird Sanctuary", "Shiv Temple", "Kanpur Road"],
  "varanasi": ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"],
};

// Function to search location and display results
function searchLocation() {
    const searchBox = document.getElementById("searchBox");
    const query = searchBox.value.trim().toLowerCase();
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    if (query.length === 0) {
        return;
    }

    // Check if the query exists in the data
    if (locationsData[query]) {
        const places = locationsData[query];
        places.forEach((place) => {
            const locationDiv = document.createElement("div");
            locationDiv.className = "location";
            locationDiv.textContent = place;
            resultsDiv.appendChild(locationDiv);
        });
    } else {
        resultsDiv.textContent = "No results found for the entered district.";
    }
}
