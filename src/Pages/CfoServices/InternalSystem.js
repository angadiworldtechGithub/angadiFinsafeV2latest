import ServiceComp from "../../Components/ServiceComp";

export default function InternalSystem() {
  return (
    <ServiceComp
      title="Internal Systems & Processes Design (SOPs)"
      description ="Finsafe Solutions helps businesses establish efficient internal systems and processes, including designing standard operating procedures (SOPs). This enhances operational efficiency, improves risk management, and supports scalability. "
      imageSource="assets/images/service3/Internal System & Processes design(SOPs).png"
      bulletPoints={[
       
      ]}
      inputList={[
        {
          elementType: "input",
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
        },
        {
          elementType: "input",
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Email",
        },
        {
          elementType: "input",
          type: "tel",
          id: "contact_number",
          name: "contact_number",
          placeholder: "Contact Number",
        },
        {
          elementType: "input",
          type: "text",
          id: "organisation",
          name: "organisation",
          placeholder: "Organisation Name",
        },
        {
          elementType: "input",
          type: "text",
          id: "services",
          name: "services",
          placeholder: "Services",
        },
        {
          elementType: "select",
          type: "text",
          id: "state",
          name: "state",
          placeholder: "Select your state",
          optionList: [
            { value: "AN", text: "Andaman and Nicobar Islands" },
            { value: "AP", text: "Andhra Pradesh" },
            { value: "AR", text: "Arunachal Pradesh" },
            { value: "AS", text: "Assam" },
            { value: "BR", text: "Bihar" },
            { value: "CH", text: "Chandigarh" },
            { value: "CT", text: "Chhattisgarh" },
            { value: "DN", text: "Dadra and Nagar Haveli" },
            { value: "DD", text: "Daman and Diu" },
            { value: "DL", text: "Delhi" },
            { value: "GA", text: "Goa" },
            { value: "GJ", text: "Gujarat" },
            { value: "HR", text: "Haryana" },
            { value: "HP", text: "Himachal Pradesh" },
            { value: "JK", text: "Jammu and Kashmir" },
            { value: "JH", text: "Jharkhand" },
            { value: "KA", text: "Karnataka" },
            { value: "KL", text: "Kerala" },
            { value: "LA", text: "Ladakh" },
            { value: "LD", text: "Lakshadweep" },
            { value: "MP", text: "Madhya Pradesh" },
            { value: "MH", text: "Maharashtra" },
            { value: "MN", text: "Manipur" },
            { value: "MZ", text: "Mizoram" },
            { value: "OR", text: "Odisha" },
            { value: "PY", text: "Puducherry" },
            { value: "PB", text: "Punjab" },
            { value: "RJ", text: "Rajasthan" },
            { value: "SK", text: "Sikkim" },
            { value: "TN", text: "Tamil Nadu" },
            { value: "TG", text: "Telangana" },
            { value: "TR", text: "Tripura" },
            { value: "UP", text: "Uttar Pradesh" },
            { value: "UT", text: "Uttarakhand" },
            { value: "WB", text: "West Bengal" },
          ],
        },
        {
          elementType: "select",
          type: "text",
          id: "city",
          name: "city",
          placeholder: "Select city",
          optionList: [
            { value: "Adilabad", text: "Adilabad" },
            { value: "Agra", text: "Agra" },
            { value: "Ahmedabad", text: "Ahmedabad" },
            { value: "Ahmednagar", text: "Ahmednagar" },
            { value: "Aizawl", text: "Aizawl" },
            { value: "Ajitgarh (Mohali)", text: "Ajitgarh (Mohali)" },
            { value: "Ajmer", text: "Ajmer" },
            { value: "Akola", text: "Akola" },
            { value: "Alappuzha", text: "Alappuzha" },
            { value: "Aligarh", text: "Aligarh" },
            { value: "Alirajpur", text: "Alirajpur" },
            { value: "Allahabad", text: "Allahabad" },
            { value: "Almora", text: "Almora" },
            { value: "Alwar", text: "Alwar" },
            { value: "Ambala", text: "Ambala" },
            { value: "Ambedkar Nagar", text: "Ambedkar Nagar" },
            { value: "Amravati", text: "Amravati" },
            { value: "Amreli district", text: "Amreli district" },
            { value: "Amritsar", text: "Amritsar" },
            { value: "Anand", text: "Anand" },
            { value: "Anantapur", text: "Anantapur" },
            { value: "Anantnag", text: "Anantnag" },
            { value: "Angul", text: "Angul" },
            { value: "Anjaw", text: "Anjaw" },
            { value: "Anuppur", text: "Anuppur" },
            { value: "Araria", text: "Araria" },
            { value: "Ariyalur", text: "Ariyalur" },
            { value: "Arwal", text: "Arwal" },
            { value: "Ashok Nagar", text: "Ashok Nagar" },
            { value: "Auraiya", text: "Auraiya" },
            { value: "Aurangabad", text: "Aurangabad" },
            { value: "Aurangabad", text: "Aurangabad" },
            { value: "Azamgarh", text: "Azamgarh" },
            { value: "Badgam", text: "Badgam" },
            { value: "Bagalkot", text: "Bagalkot" },
            { value: "Bageshwar", text: "Bageshwar" },
            { value: "Bagpat", text: "Bagpat" },
            { value: "Bahraich", text: "Bahraich" },
            { value: "Baksa", text: "Baksa" },
            { value: "Balaghat", text: "Balaghat" },
            { value: "Balangir", text: "Balangir" },
            { value: "Balasore", text: "Balasore" },
            { value: "Ballia", text: "Ballia" },
            { value: "Balrampur", text: "Balrampur" },
            { value: "Banaskantha", text: "Banaskantha" },
            { value: "Banda", text: "Banda" },
            { value: "Bandipora", text: "Bandipora" },
            { value: "Bangalore Rural", text: "Bangalore Rural" },
            { value: "Bangalore Urban", text: "Bangalore Urban" },
            { value: "Banka", text: "Banka" },
            { value: "Bankura", text: "Bankura" },
            { value: "Banswara", text: "Banswara" },
            { value: "Barabanki", text: "Barabanki" },
            { value: "Baramulla", text: "Baramulla" },
            { value: "Baran", text: "Baran" },
            { value: "Bardhaman", text: "Bardhaman" },
            { value: "Bareilly", text: "Bareilly" },
            { value: "Bargarh (Baragarh)", text: "Bargarh (Baragarh)" },
            { value: "Barmer", text: "Barmer" },
            { value: "Barnala", text: "Barnala" },
            { value: "Barpeta", text: "Barpeta" },
            { value: "Barwani", text: "Barwani" },
            { value: "Bastar", text: "Bastar" },
            { value: "Basti", text: "Basti" },
            { value: "Bathinda", text: "Bathinda" },
            { value: "Beed", text: "Beed" },
            { value: "Begusarai", text: "Begusarai" },
            { value: "Belgaum", text: "Belgaum" },
            { value: "Bellary", text: "Bellary" },
            { value: "Betul", text: "Betul" },
            { value: "Bhadrak", text: "Bhadrak" },
            { value: "Bhagalpur", text: "Bhagalpur" },
            { value: "Bhandara", text: "Bhandara" },
            { value: "Bharatpur", text: "Bharatpur" },
            { value: "Bharuch", text: "Bharuch" },
            { value: "Bhavnagar", text: "Bhavnagar" },
            { value: "Bhilwara", text: "Bhilwara" },
            { value: "Bhind", text: "Bhind" },
            { value: "Bhiwani", text: "Bhiwani" },
            { value: "Bhojpur", text: "Bhojpur" },
            { value: "Bhopal", text: "Bhopal" },
            { value: "Bidar", text: "Bidar" },
            { value: "Bijapur", text: "Bijapur" },
            { value: "Bijapur", text: "Bijapur" },
            { value: "Bijnor", text: "Bijnor" },
            { value: "Bikaner", text: "Bikaner" },
            { value: "Bilaspur", text: "Bilaspur" },
            { value: "Bilaspur", text: "Bilaspur" },
            { value: "Birbhum", text: "Birbhum" },
            { value: "Bishnupur", text: "Bishnupur" },
            { value: "Bokaro", text: "Bokaro" },
            { value: "Bongaigaon", text: "Bongaigaon" },
            { value: "Boudh (Bauda)", text: "Boudh (Bauda)" },
            { value: "Budaun", text: "Budaun" },
            { value: "Bulandshahr", text: "Bulandshahr" },
            { value: "Buldhana", text: "Buldhana" },
            { value: "Bundi", text: "Bundi" },
            { value: "Burhanpur", text: "Burhanpur" },
            { value: "Buxar", text: "Buxar" },
            { value: "Cachar", text: "Cachar" },
            { value: "Central Delhi", text: "Central Delhi" },
            { value: "Chamarajnagar", text: "Chamarajnagar" },
            { value: "Chamba", text: "Chamba" },
            { value: "Chamoli", text: "Chamoli" },
            { value: "Champawat", text: "Champawat" },
            { value: "Champhai", text: "Champhai" },
            { value: "Chandauli", text: "Chandauli" },
            { value: "Chandel", text: "Chandel" },
            { value: "Chandigarh", text: "Chandigarh" },
            { value: "Chandrapur", text: "Chandrapur" },
            { value: "Changlang", text: "Changlang" },
            { value: "Chatra", text: "Chatra" },
            { value: "Chennai", text: "Chennai" },
            { value: "Chhatarpur", text: "Chhatarpur" },
            {
              value: "Chhatrapati Shahuji Maharaj Nagar",
              text: "Chhatrapati Shahuji Maharaj Nagar",
            },
            { value: "Chhindwara", text: "Chhindwara" },
            { value: "Chikkaballapur", text: "Chikkaballapur" },
            { value: "Chikkamagaluru", text: "Chikkamagaluru" },
            { value: "Chirang", text: "Chirang" },
            { value: "Chitradurga", text: "Chitradurga" },
            { value: "Chitrakoot", text: "Chitrakoot" },
            { value: "Chittoor", text: "Chittoor" },
            { value: "Chittorgarh", text: "Chittorgarh" },
            { value: "Churachandpur", text: "Churachandpur" },
            { value: "Churu", text: "Churu" },
            { value: "Coimbatore", text: "Coimbatore" },
            { value: "Cooch Behar", text: "Cooch Behar" },
            { value: "Cuddalore", text: "Cuddalore" },
            { value: "Cuttack", text: "Cuttack" },
            { value: "Dadra and Nagar Haveli", text: "Dadra and Nagar Haveli" },
            { value: "Dahod", text: "Dahod" },
            { value: "Dakshin Dinajpur", text: "Dakshin Dinajpur" },
            { value: "Dakshina Kannada", text: "Dakshina Kannada" },
            { value: "Daman", text: "Daman" },
            { value: "Damoh", text: "Damoh" },
            { value: "Dantewada", text: "Dantewada" },
            { value: "Darbhanga", text: "Darbhanga" },
            { value: "Darjeeling", text: "Darjeeling" },
            { value: "Darrang", text: "Darrang" },
            { value: "Datia", text: "Datia" },
            { value: "Dausa", text: "Dausa" },
            { value: "Davanagere", text: "Davanagere" },
            { value: "Debagarh (Deogarh)", text: "Debagarh (Deogarh)" },
            { value: "Dehradun", text: "Dehradun" },
            { value: "Deoghar", text: "Deoghar" },
            { value: "Deoria", text: "Deoria" },
            { value: "Dewas", text: "Dewas" },
            { value: "Dhalai", text: "Dhalai" },
            { value: "Dhamtari", text: "Dhamtari" },
            { value: "Dhanbad", text: "Dhanbad" },
            { value: "Dhar", text: "Dhar" },
            { value: "Dharmapuri", text: "Dharmapuri" },
            { value: "Dharwad", text: "Dharwad" },
            { value: "Dhemaji", text: "Dhemaji" },
            { value: "Dhenkanal", text: "Dhenkanal" },
            { value: "Dholpur", text: "Dholpur" },
            { value: "Dhubri", text: "Dhubri" },
            { value: "Dhule", text: "Dhule" },
            { value: "Dibang Valley", text: "Dibang Valley" },
            { value: "Dibrugarh", text: "Dibrugarh" },
            { value: "Dima Hasao", text: "Dima Hasao" },
            { value: "Dimapur", text: "Dimapur" },
            { value: "Dindigul", text: "Dindigul" },
            { value: "Dindori", text: "Dindori" },
            { value: "Diu", text: "Diu" },
            { value: "Doda", text: "Doda" },
            { value: "Dumka", text: "Dumka" },
            { value: "Dungapur", text: "Dungapur" },
            { value: "Durg", text: "Durg" },
            { value: "East Champaran", text: "East Champaran" },
            { value: "East Delhi", text: "East Delhi" },
            { value: "East Garo Hills", text: "East Garo Hills" },
            { value: "East Khasi Hills", text: "East Khasi Hills" },
            { value: "East Siang", text: "East Siang" },
            { value: "East Sikkim", text: "East Sikkim" },
            { value: "East Singhbhum", text: "East Singhbhum" },
            { value: "Eluru", text: "Eluru" },
            { value: "Ernakulam", text: "Ernakulam" },
            { value: "Erode", text: "Erode" },
            { value: "Etah", text: "Etah" },
            { value: "Etawah", text: "Etawah" },
            { value: "Faizabad", text: "Faizabad" },
            { value: "Faridabad", text: "Faridabad" },
            { value: "Faridkot", text: "Faridkot" },
            { value: "Farrukhabad", text: "Farrukhabad" },
            { value: "Fatehabad", text: "Fatehabad" },
            { value: "Fatehgarh Sahib", text: "Fatehgarh Sahib" },
            { value: "Fatehpur", text: "Fatehpur" },
            { value: "Fazilka", text: "Fazilka" },
            { value: "Firozabad", text: "Firozabad" },
            { value: "Firozpur", text: "Firozpur" },
            { value: "Gadag", text: "Gadag" },
            { value: "Gadchiroli", text: "Gadchiroli" },
            { value: "Gajapati", text: "Gajapati" },
            { value: "Ganderbal", text: "Ganderbal" },
            { value: "Gandhinagar", text: "Gandhinagar" },
            { value: "Ganganagar", text: "Ganganagar" },
            { value: "Ganjam", text: "Ganjam" },
            { value: "Garhwa", text: "Garhwa" },
            { value: "Gautam Buddh Nagar", text: "Gautam Buddh Nagar" },
            { value: "Gaya", text: "Gaya" },
            { value: "Ghaziabad", text: "Ghaziabad" },
            { value: "Ghazipur", text: "Ghazipur" },
            { value: "Giridih", text: "Giridih" },
            { value: "Goalpara", text: "Goalpara" },
            { value: "Godda", text: "Godda" },
            { value: "Golaghat", text: "Golaghat" },
            { value: "Gonda", text: "Gonda" },
            { value: "Gondia", text: "Gondia" },
            { value: "Gopalganj", text: "Gopalganj" },
            { value: "Gorakhpur", text: "Gorakhpur" },
            { value: "Gulbarga", text: "Gulbarga" },
            { value: "Gumla", text: "Gumla" },
            { value: "Guna", text: "Guna" },
            { value: "Guntur", text: "Guntur" },
            { value: "Gurdaspur", text: "Gurdaspur" },
            { value: "Gurgaon", text: "Gurgaon" },
            { value: "Gwalior", text: "Gwalior" },
            { value: "Hailakandi", text: "Hailakandi" },
            { value: "Hamirpur", text: "Hamirpur" },
            { value: "Hamirpur", text: "Hamirpur" },
            { value: "Hanumangarh", text: "Hanumangarh" },
            { value: "Harda", text: "Harda" },
            { value: "Hardoi", text: "Hardoi" },
            { value: "Haridwar", text: "Haridwar" },
            { value: "Hassan", text: "Hassan" },
            { value: "Haveri district", text: "Haveri district" },
            { value: "Hazaribag", text: "Hazaribag" },
            { value: "Hingoli", text: "Hingoli" },
            { value: "Hissar", text: "Hissar" },
            { value: "Hooghly", text: "Hooghly" },
            { value: "Hoshangabad", text: "Hoshangabad" },
            { value: "Hoshiarpur", text: "Hoshiarpur" },
            { value: "Howrah", text: "Howrah" },
            { value: "Hyderabad", text: "Hyderabad" },
            { value: "Hyderabad", text: "Hyderabad" },
            { value: "Idukki", text: "Idukki" },
            { value: "Imphal East", text: "Imphal East" },
            { value: "Imphal West", text: "Imphal West" },
            { value: "Indore", text: "Indore" },
            { value: "Jabalpur", text: "Jabalpur" },
            { value: "Jagatsinghpur", text: "Jagatsinghpur" },
            { value: "Jaintia Hills", text: "Jaintia Hills" },
            { value: "Jaipur", text: "Jaipur" },
            { value: "Jaisalmer", text: "Jaisalmer" },
            { value: "Jajpur", text: "Jajpur" },
            { value: "Jalandhar", text: "Jalandhar" },
            { value: "Jalaun", text: "Jalaun" },
            { value: "Jalgaon", text: "Jalgaon" },
            { value: "Jalna", text: "Jalna" },
            { value: "Jalore", text: "Jalore" },
            { value: "Jalpaiguri", text: "Jalpaiguri" },
            { value: "Jammu", text: "Jammu" },
            { value: "Jamnagar", text: "Jamnagar" },
            { value: "Jamtara", text: "Jamtara" },
            { value: "Jamui", text: "Jamui" },
            { value: "Janjgir-Champa", text: "Janjgir-Champa" },
            { value: "Jashpur", text: "Jashpur" },
            { value: "Jaunpur district", text: "Jaunpur district" },
            { value: "Jehanabad", text: "Jehanabad" },
            { value: "Jhabua", text: "Jhabua" },
            { value: "Jhajjar", text: "Jhajjar" },
            { value: "Jhalawar", text: "Jhalawar" },
            { value: "Jhansi", text: "Jhansi" },
            { value: "Jharsuguda", text: "Jharsuguda" },
            { value: "Jhunjhunu", text: "Jhunjhunu" },
            { value: "Jind", text: "Jind" },
            { value: "Jodhpur", text: "Jodhpur" },
            { value: "Jorhat", text: "Jorhat" },
            { value: "Junagadh", text: "Junagadh" },
            { value: "Jyotiba Phule Nagar", text: "Jyotiba Phule Nagar" },
            {
              value: "Kabirdham (formerly Kawardha)",
              text: "Kabirdham (formerly Kawardha)",
            },
            { value: "Kadapa", text: "Kadapa" },
            { value: "Kaimur", text: "Kaimur" },
            { value: "Kaithal", text: "Kaithal" },
            { value: "Kakinada", text: "Kakinada" },
            { value: "Kalahandi", text: "Kalahandi" },
            { value: "Kamrup", text: "Kamrup" },
            { value: "Kamrup Metropolitan", text: "Kamrup Metropolitan" },
            { value: "Kanchipuram", text: "Kanchipuram" },
            { value: "Kandhamal", text: "Kandhamal" },
            { value: "Kangra", text: "Kangra" },
            { value: "Kanker", text: "Kanker" },
            { value: "Kannauj", text: "Kannauj" },
            { value: "Kannur", text: "Kannur" },
            { value: "Kanpur", text: "Kanpur" },
            { value: "Kanshi Ram Nagar", text: "Kanshi Ram Nagar" },
            { value: "Kanyakumari", text: "Kanyakumari" },
            { value: "Kapurthala", text: "Kapurthala" },
            { value: "Karaikal", text: "Karaikal" },
            { value: "Karauli", text: "Karauli" },
            { value: "Karbi Anglong", text: "Karbi Anglong" },
            { value: "Kargil", text: "Kargil" },
            { value: "Karimganj", text: "Karimganj" },
            { value: "Karimnagar", text: "Karimnagar" },
            { value: "Karnal", text: "Karnal" },
            { value: "Karur", text: "Karur" },
            { value: "Kasaragod", text: "Kasaragod" },
            { value: "Kathua", text: "Kathua" },
            { value: "Katihar", text: "Katihar" },
            { value: "Katni", text: "Katni" },
            { value: "Kaushambi", text: "Kaushambi" },
            { value: "Kendrapara", text: "Kendrapara" },
            { value: "Kendujhar (Keonjhar)", text: "Kendujhar (Keonjhar)" },
            { value: "Khagaria", text: "Khagaria" },
            { value: "Khammam", text: "Khammam" },
            { value: "Khandwa (East Nimar)", text: "Khandwa (East Nimar)" },
            { value: "Khargone (West Nimar)", text: "Khargone (West Nimar)" },
            { value: "Kheda", text: "Kheda" },
            { value: "Khordha", text: "Khordha" },
            { value: "Khowai", text: "Khowai" },
            { value: "Khunti", text: "Khunti" },
            { value: "Kinnaur", text: "Kinnaur" },
            { value: "Kishanganj", text: "Kishanganj" },
            { value: "Kishtwar", text: "Kishtwar" },
            { value: "Kodagu", text: "Kodagu" },
            { value: "Koderma", text: "Koderma" },
            { value: "Kohima", text: "Kohima" },
            { value: "Kokrajhar", text: "Kokrajhar" },
            { value: "Kolar", text: "Kolar" },
            { value: "Kolasib", text: "Kolasib" },
            { value: "Kolhapur", text: "Kolhapur" },
            { value: "Kolkata", text: "Kolkata" },
            { value: "Kollam", text: "Kollam" },
            { value: "Koppal", text: "Koppal" },
            { value: "Koraput", text: "Koraput" },
            { value: "Korba", text: "Korba" },
            { value: "Koriya", text: "Koriya" },
            { value: "Kota", text: "Kota" },
            { value: "Kottayam", text: "Kottayam" },
            { value: "Kozhikode", text: "Kozhikode" },
            { value: "Krishna", text: "Krishna" },
            { value: "Kulgam", text: "Kulgam" },
            { value: "Kullu", text: "Kullu" },
            { value: "Kupwara", text: "Kupwara" },
            { value: "Kurnool", text: "Kurnool" },
            { value: "Kurukshetra", text: "Kurukshetra" },
            { value: "Kurung Kumey", text: "Kurung Kumey" },
            { value: "Kushinagar", text: "Kushinagar" },
            { value: "Kutch", text: "Kutch" },
            { value: "Lahaul and Spiti", text: "Lahaul and Spiti" },
            { value: "Lakhimpur", text: "Lakhimpur" },
            { value: "Lakhimpur Kheri", text: "Lakhimpur Kheri" },
            { value: "Lakhisarai", text: "Lakhisarai" },
            { value: "Lalitpur", text: "Lalitpur" },
            { value: "Latehar", text: "Latehar" },
            { value: "Latur", text: "Latur" },
            { value: "Lawngtlai", text: "Lawngtlai" },
            { value: "Leh", text: "Leh" },
            { value: "Lohardaga", text: "Lohardaga" },
            { value: "Lohit", text: "Lohit" },
            { value: "Lower Dibang Valley", text: "Lower Dibang Valley" },
            { value: "Lower Subansiri", text: "Lower Subansiri" },
            { value: "Lucknow", text: "Lucknow" },
            { value: "Ludhiana", text: "Ludhiana" },
            { value: "Lunglei", text: "Lunglei" },
            { value: "Madhepura", text: "Madhepura" },
            { value: "Madhubani", text: "Madhubani" },
            { value: "Madurai", text: "Madurai" },
            { value: "Mahamaya Nagar", text: "Mahamaya Nagar" },
            { value: "Maharajganj", text: "Maharajganj" },
            { value: "Mahasamund", text: "Mahasamund" },
            { value: "Mahbubnagar", text: "Mahbubnagar" },
            { value: "Mahe", text: "Mahe" },
            { value: "Mahendragarh", text: "Mahendragarh" },
            { value: "Mahoba", text: "Mahoba" },
            { value: "Mainpuri", text: "Mainpuri" },
            { value: "Malappuram", text: "Malappuram" },
            { value: "Maldah", text: "Maldah" },
            { value: "Malkangiri", text: "Malkangiri" },
            { value: "Mamit", text: "Mamit" },
            { value: "Mandi", text: "Mandi" },
            { value: "Mandla", text: "Mandla" },
            { value: "Mandsaur", text: "Mandsaur" },
            { value: "Mandya", text: "Mandya" },
            { value: "Mansa", text: "Mansa" },
            { value: "Marigaon", text: "Marigaon" },
            { value: "Mathura", text: "Mathura" },
            { value: "Mau", text: "Mau" },
            { value: "Mayurbhanj", text: "Mayurbhanj" },
            { value: "Medak", text: "Medak" },
            { value: "Meerut", text: "Meerut" },
            { value: "Mehsana", text: "Mehsana" },
            { value: "Mewat", text: "Mewat" },
            { value: "Mirzapur", text: "Mirzapur" },
            { value: "Moga", text: "Moga" },
            { value: "Mokokchung", text: "Mokokchung" },
            { value: "Mon", text: "Mon" },
            { value: "Moradabad", text: "Moradabad" },
            { value: "Morena", text: "Morena" },
            { value: "Mumbai City", text: "Mumbai City" },
            { value: "Mumbai suburban", text: "Mumbai suburban" },
            { value: "Munger", text: "Munger" },
            { value: "Murshidabad", text: "Murshidabad" },
            { value: "Muzaffarnagar", text: "Muzaffarnagar" },
            { value: "Muzaffarpur", text: "Muzaffarpur" },
            { value: "Mysore", text: "Mysore" },
            { value: "Nabarangpur", text: "Nabarangpur" },
            { value: "Nadia", text: "Nadia" },
            { value: "Nagaon", text: "Nagaon" },
            { value: "Nagapattinam", text: "Nagapattinam" },
            { value: "Nagaur", text: "Nagaur" },
            { value: "Nagpur", text: "Nagpur" },
            { value: "Nainital", text: "Nainital" },
            { value: "Nalanda", text: "Nalanda" },
            { value: "Nalbari", text: "Nalbari" },
            { value: "Nalgonda", text: "Nalgonda" },
            { value: "Namakkal", text: "Namakkal" },
            { value: "Nanded", text: "Nanded" },
            { value: "Nandurbar", text: "Nandurbar" },
            { value: "Narayanpur", text: "Narayanpur" },
            { value: "Narmada", text: "Narmada" },
            { value: "Narsinghpur", text: "Narsinghpur" },
            { value: "Nashik", text: "Nashik" },
            { value: "Navsari", text: "Navsari" },
            { value: "Nawada", text: "Nawada" },
            { value: "Nawanshahr", text: "Nawanshahr" },
            { value: "Nayagarh", text: "Nayagarh" },
            { value: "Neemuch", text: "Neemuch" },
            { value: "Nellore", text: "Nellore" },
            { value: "New Delhi", text: "New Delhi" },
            { value: "Nilgiris", text: "Nilgiris" },
            { value: "Nizamabad", text: "Nizamabad" },
            { value: "North 24 Parganas", text: "North 24 Parganas" },
            { value: "North Delhi", text: "North Delhi" },
            { value: "North East Delhi", text: "North East Delhi" },
            { value: "North Goa", text: "North Goa" },
            { value: "North Sikkim", text: "North Sikkim" },
            { value: "North Tripura", text: "North Tripura" },
            { value: "North West Delhi", text: "North West Delhi" },
            { value: "Nuapada", text: "Nuapada" },
            { value: "Ongole", text: "Ongole" },
            { value: "Osmanabad", text: "Osmanabad" },
            { value: "Pakur", text: "Pakur" },
            { value: "Palakkad", text: "Palakkad" },
            { value: "Palamu", text: "Palamu" },
            { value: "Pali", text: "Pali" },
            { value: "Palwal", text: "Palwal" },
            { value: "Panchkula", text: "Panchkula" },
            { value: "Panchmahal", text: "Panchmahal" },
            {
              value: "Panchsheel Nagar district (Hapur)",
              text: "Panchsheel Nagar district (Hapur)",
            },
            { value: "Panipat", text: "Panipat" },
            { value: "Panna", text: "Panna" },
            { value: "Papum Pare", text: "Papum Pare" },
            { value: "Parbhani", text: "Parbhani" },
            { value: "Paschim Medinipur", text: "Paschim Medinipur" },
            { value: "Patan", text: "Patan" },
            { value: "Pathanamthitta", text: "Pathanamthitta" },
            { value: "Pathankot", text: "Pathankot" },
            { value: "Patiala", text: "Patiala" },
            { value: "Patna", text: "Patna" },
            { value: "Pauri Garhwal", text: "Pauri Garhwal" },
            { value: "Perambalur", text: "Perambalur" },
            { value: "Phek", text: "Phek" },
            { value: "Pilibhit", text: "Pilibhit" },
            { value: "Pithoragarh", text: "Pithoragarh" },
            { value: "Pondicherry", text: "Pondicherry" },
            { value: "Poonch", text: "Poonch" },
            { value: "Porbandar", text: "Porbandar" },
            { value: "Pratapgarh", text: "Pratapgarh" },
            { value: "Pratapgarh", text: "Pratapgarh" },
            { value: "Pudukkottai", text: "Pudukkottai" },
            { value: "Pulwama", text: "Pulwama" },
            { value: "Pune", text: "Pune" },
            { value: "Purba Medinipur", text: "Purba Medinipur" },
            { value: "Puri", text: "Puri" },
            { value: "Purnia", text: "Purnia" },
            { value: "Purulia", text: "Purulia" },
            { value: "Raebareli", text: "Raebareli" },
            { value: "Raichur", text: "Raichur" },
            { value: "Raigad", text: "Raigad" },
            { value: "Raigarh", text: "Raigarh" },
            { value: "Raipur", text: "Raipur" },
            { value: "Raisen", text: "Raisen" },
            { value: "Rajauri", text: "Rajauri" },
            { value: "Rajgarh", text: "Rajgarh" },
            { value: "Rajkot", text: "Rajkot" },
            { value: "Rajnandgaon", text: "Rajnandgaon" },
            { value: "Rajsamand", text: "Rajsamand" },
            {
              value: "Ramabai Nagar (Kanpur Dehat)",
              text: "Ramabai Nagar (Kanpur Dehat)",
            },
            { value: "Ramanagara", text: "Ramanagara" },
            { value: "Ramanathapuram", text: "Ramanathapuram" },
            { value: "Ramban", text: "Ramban" },
            { value: "Ramgarh", text: "Ramgarh" },
            { value: "Rampur", text: "Rampur" },
            { value: "Ranchi", text: "Ranchi" },
            { value: "Ratlam", text: "Ratlam" },
            { value: "Ratnagiri", text: "Ratnagiri" },
            { value: "Rayagada", text: "Rayagada" },
            { value: "Reasi", text: "Reasi" },
            { value: "Rewa", text: "Rewa" },
            { value: "Rewari", text: "Rewari" },
            { value: "Ri Bhoi", text: "Ri Bhoi" },
            { value: "Rohtak", text: "Rohtak" },
            { value: "Rohtas", text: "Rohtas" },
            { value: "Rudraprayag", text: "Rudraprayag" },
            { value: "Rupnagar", text: "Rupnagar" },
            { value: "Sabarkantha", text: "Sabarkantha" },
            { value: "Sagar", text: "Sagar" },
            { value: "Saharanpur", text: "Saharanpur" },
            { value: "Saharsa", text: "Saharsa" },
            { value: "Sahibganj", text: "Sahibganj" },
            { value: "Saiha", text: "Saiha" },
            { value: "Salem", text: "Salem" },
            { value: "Samastipur", text: "Samastipur" },
            { value: "Samba", text: "Samba" },
            { value: "Sambalpur", text: "Sambalpur" },
            { value: "Sangli", text: "Sangli" },
            { value: "Sangrur", text: "Sangrur" },
            { value: "Sant Kabir Nagar", text: "Sant Kabir Nagar" },
            { value: "Sant Ravidas Nagar", text: "Sant Ravidas Nagar" },
            { value: "Saran", text: "Saran" },
            { value: "Satara", text: "Satara" },
            { value: "Satna", text: "Satna" },
            { value: "Sawai Madhopur", text: "Sawai Madhopur" },
            { value: "Sehore", text: "Sehore" },
            { value: "Senapati", text: "Senapati" },
            { value: "Seoni", text: "Seoni" },
            { value: "Seraikela Kharsawan", text: "Seraikela Kharsawan" },
            { value: "Serchhip", text: "Serchhip" },
            { value: "Shahdol", text: "Shahdol" },
            { value: "Shahjahanpur", text: "Shahjahanpur" },
            { value: "Shajapur", text: "Shajapur" },
            { value: "Shamli", text: "Shamli" },
            { value: "Sheikhpura", text: "Sheikhpura" },
            { value: "Sheohar", text: "Sheohar" },
            { value: "Sheopur", text: "Sheopur" },
            { value: "Shimla", text: "Shimla" },
            { value: "Shimoga", text: "Shimoga" },
            { value: "Shivpuri", text: "Shivpuri" },
            { value: "Shopian", text: "Shopian" },
            { value: "Shravasti", text: "Shravasti" },
            { value: "Sibsagar", text: "Sibsagar" },
            { value: "Siddharthnagar", text: "Siddharthnagar" },
            { value: "Sidhi", text: "Sidhi" },
            { value: "Sikar", text: "Sikar" },
            { value: "Simdega", text: "Simdega" },
            { value: "Sindhudurg", text: "Sindhudurg" },
            { value: "Singrauli", text: "Singrauli" },
            { value: "Sirmaur", text: "Sirmaur" },
            { value: "Sirohi", text: "Sirohi" },
            { value: "Sirsa", text: "Sirsa" },
            { value: "Sitamarhi", text: "Sitamarhi" },
            { value: "Sitapur", text: "Sitapur" },
            { value: "Sivaganga", text: "Sivaganga" },
            { value: "Siwan", text: "Siwan" },
            { value: "Solan", text: "Solan" },
            { value: "Solapur", text: "Solapur" },
            { value: "Sonbhadra", text: "Sonbhadra" },
            { value: "Sonipat", text: "Sonipat" },
            { value: "Sonitpur", text: "Sonitpur" },
            { value: "South 24 Parganas", text: "South 24 Parganas" },
            { value: "South Delhi", text: "South Delhi" },
            { value: "South Garo Hills", text: "South Garo Hills" },
            { value: "South Goa", text: "South Goa" },
            { value: "South Sikkim", text: "South Sikkim" },
            { value: "South Tripura", text: "South Tripura" },
            { value: "South West Delhi", text: "South West Delhi" },
            { value: "Sri Muktsar Sahib", text: "Sri Muktsar Sahib" },
            { value: "Srikakulam", text: "Srikakulam" },
            { value: "Srinagar", text: "Srinagar" },
            { value: "Subarnapur (Sonepur)", text: "Subarnapur (Sonepur)" },
            { value: "Sultanpur", text: "Sultanpur" },
            { value: "Sundergarh", text: "Sundergarh" },
            { value: "Supaul", text: "Supaul" },
            { value: "Surat", text: "Surat" },
            { value: "Surendranagar", text: "Surendranagar" },
            { value: "Surguja", text: "Surguja" },
            { value: "Tamenglong", text: "Tamenglong" },
            { value: "Tarn Taran", text: "Tarn Taran" },
            { value: "Tawang", text: "Tawang" },
            { value: "Tehri Garhwal", text: "Tehri Garhwal" },
            { value: "Thane", text: "Thane" },
            { value: "Thanjavur", text: "Thanjavur" },
            { value: "The Dangs", text: "The Dangs" },
            { value: "Theni", text: "Theni" },
            { value: "Thiruvananthapuram", text: "Thiruvananthapuram" },
            { value: "Thoothukudi", text: "Thoothukudi" },
            { value: "Thoubal", text: "Thoubal" },
            { value: "Thrissur", text: "Thrissur" },
            { value: "Tikamgarh", text: "Tikamgarh" },
            { value: "Tinsukia", text: "Tinsukia" },
            { value: "Tirap", text: "Tirap" },
            { value: "Tiruchirappalli", text: "Tiruchirappalli" },
            { value: "Tirunelveli", text: "Tirunelveli" },
            { value: "Tirupur", text: "Tirupur" },
            { value: "Tiruvallur", text: "Tiruvallur" },
            { value: "Tiruvannamalai", text: "Tiruvannamalai" },
            { value: "Tiruvarur", text: "Tiruvarur" },
            { value: "Tonk", text: "Tonk" },
            { value: "Tuensang", text: "Tuensang" },
            { value: "Tumkur", text: "Tumkur" },
            { value: "Udaipur", text: "Udaipur" },
            { value: "Udalguri", text: "Udalguri" },
            { value: "Udham Singh Nagar", text: "Udham Singh Nagar" },
            { value: "Udhampur", text: "Udhampur" },
            { value: "Udupi", text: "Udupi" },
            { value: "Ujjain", text: "Ujjain" },
            { value: "Ukhrul", text: "Ukhrul" },
            { value: "Umaria", text: "Umaria" },
            { value: "Una", text: "Una" },
            { value: "Unnao", text: "Unnao" },
            { value: "Upper Siang", text: "Upper Siang" },
            { value: "Upper Subansiri", text: "Upper Subansiri" },
            { value: "Uttar Dinajpur", text: "Uttar Dinajpur" },
            { value: "Uttara Kannada", text: "Uttara Kannada" },
            { value: "Uttarkashi", text: "Uttarkashi" },
            { value: "Vadodara", text: "Vadodara" },
            { value: "Vaishali", text: "Vaishali" },
            { value: "Valsad", text: "Valsad" },
            { value: "Varanasi", text: "Varanasi" },
            { value: "Vellore", text: "Vellore" },
            { value: "Vidisha", text: "Vidisha" },
            { value: "Viluppuram", text: "Viluppuram" },
            { value: "Virudhunagar", text: "Virudhunagar" },
            { value: "Visakhapatnam", text: "Visakhapatnam" },
            { value: "Vizianagaram", text: "Vizianagaram" },
            { value: "Vyara", text: "Vyara" },
            { value: "Warangal", text: "Warangal" },
            { value: "Wardha", text: "Wardha" },
            { value: "Washim", text: "Washim" },
            { value: "Wayanad", text: "Wayanad" },
            { value: "West Champaran", text: "West Champaran" },
            { value: "West Delhi", text: "West Delhi" },
            { value: "West Garo Hills", text: "West Garo Hills" },
            { value: "West Kameng", text: "West Kameng" },
            { value: "West Khasi Hills", text: "West Khasi Hills" },
            { value: "West Siang", text: "West Siang" },
            { value: "West Sikkim", text: "West Sikkim" },
            { value: "West Singhbhum", text: "West Singhbhum" },
            { value: "West Tripura", text: "West Tripura" },
            { value: "Wokha", text: "Wokha" },
            { value: "Yadgir", text: "Yadgir" },
            { value: "Yamuna Nagar", text: "Yamuna Nagar" },
            { value: "Yanam", text: "Yanam" },
            { value: "Yavatmal", text: "Yavatmal" },
            { value: "Zunheboto", text: "Zunheboto" },
          ],
        },
      ]}
    />
  );
}
