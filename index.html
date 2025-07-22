<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Umre & Hac Maliyet Hesaplayıcı</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <script src="capacitor.js"></script>
    <style>
        body { background-color: #f8f9fa; font-family: 'Inter', sans-serif; } .container { max-width: 900px; background-color: #fff; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 4px_8px rgba(0,0,0,0.05); } h1, h2, h3, h4, h5 { color: #003d73; font-weight: 600; } h2 { border-bottom: 2px solid #dee2e6; padding-bottom: 0.5rem; margin-bottom: 1.5rem; font-size: 1.5rem; } .form-label { font-weight: 500; } #teklifCiktisi { border: 1px solid #dee2e6; padding: 2rem; margin-top: 2rem; border-radius: 0.5rem; background-color: #ffffff;} .preserve-whitespace { white-space: pre-wrap; } #logoPreview { max-height: 60px; margin-top: 10px; border-radius: 0.25rem; border: 1px solid #dee2e6; } .signature { text-align: center; padding: 25px 0 15px 0; color: #b0b0b0; font-size: 0.85em; font-style: italic; } .lang-btn { font-weight: 500; } .lang-btn.active { font-weight: 700; text-decoration: underline; pointer-events: none; }
    </style>
</head>
<body>
<div class="container my-5">
    <div class="text-end mb-3">
        <button id="lang-tr" class="btn btn-link lang-btn" onclick="setLanguage('tr')">Türkçe</button>
        <span>|</span>
        <button id="lang-en" class="btn btn-link lang-btn" onclick="setLanguage('en')">English</button>
    </div>
    <div class="text-center mb-5">
        <h1 data-lang-key="mainTitle">Umre & Hac Maliyet Hesaplayıcı</h1>
        <p class="text-muted" data-lang-key="mainSubtitle">Fiyat teklifinizi kolayca oluşturun, PDF veya Excel olarak indirin.</p>
    </div>
    <section>
        <h2 data-lang-key="generalInfoTitle"><i class="bi bi-info-circle-fill"></i> Genel Bilgiler</h2>
        <div class="row">
            <div class="col-md-6 mb-3"><label for="firmaAdi" class="form-label" data-lang-key="companyNameLabel">Firma Adı</label><input type="text" class="form-control" id="firmaAdi" data-lang-placeholder="companyNamePlaceholder"></div><div class="col-md-6 mb-3"><label for="grupLideri" class="form-label" data-lang-key="groupLeaderLabel">Grup Lideri Adı</label><input type="text" class="form-control" id="grupLideri" data-lang-placeholder="groupLeaderPlaceholder"></div><div class="col-md-6 mb-3"><label for="grupKisiSayisi" class="form-label" data-lang-key="groupSizeLabel">Grup Kişi Sayısı</label><input type="number" class="form-control" id="grupKisiSayisi" data-lang-placeholder="groupSizePlaceholder"></div><div class="col-md-3 mb-3"><label for="talepTarihi" class="form-label" data-lang-key="offerStartDateLabel">Teklif Başlangıç Tarihi</label><input type="date" class="form-control" id="talepTarihi"></div><div class="col-md-3 mb-3"><label for="talepBitisTarihi" class="form-label" data-lang-key="offerEndDateLabel">Teklif Bitiş Tarihi</label><input type="date" class="form-control" id="talepBitisTarihi"></div><div class="col-md-12 mb-3"><label for="logoUpload" class="form-label" data-lang-key="logoUploadLabel">Firma Logosu Yükle (PDF için)</label><input class="form-control" type="file" id="logoUpload" accept="image/*"><div class="text-center"><img id="logoPreview" src="" alt="Logo Preview" style="display:none;"/></div></div>
        </div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="medinaHotelTitle"><i class="bi bi-moon-stars-fill"></i> Medine Otel Bilgileri</h2>
        <div class="row">
            <div class="col-md-12 mb-3"><label for="medineOtelAdi" class="form-label" data-lang-key="hotelNameLabel">Otel Adı</label><input type="text" class="form-control" id="medineOtelAdi" data-lang-placeholder="medinaHotelPlaceholder"></div><div class="col-md-4 mb-3"><label for="medineGiris" class="form-label" data-lang-key="checkinDateLabel">Giriş Tarihi</label><input type="date" class="form-control" id="medineGiris" onchange="calculateNights()"></div><div class="col-md-4 mb-3"><label for="medineCikis" class="form-label" data-lang-key="checkoutDateLabel">Çıkış Tarihi</label><input type="date" class="form-control" id="medineCikis" onchange="calculateNights()"></div><div class="col-md-4 mb-3"><label for="medineGece" class="form-label" data-lang-key="nightsCountLabel">Gece Sayısı</label><input type="text" class="form-control" id="medineGece" readonly></div>
        </div><div id="medineInputs"></div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="meccaHotelTitle"><i class="bi bi-house-heart-fill"></i> Mekke Otel Bilgileri</h2>
        <div class="row">
            <div class="col-md-12 mb-3"><label for="mekkeOtelAdi" class="form-label" data-lang-key="hotelNameLabel">Otel Adı</label><input type="text" class="form-control" id="mekkeOtelAdi" data-lang-placeholder="meccaHotelPlaceholder"></div><div class="col-md-4 mb-3"><label for="mekkeGiris" class="form-label" data-lang-key="checkinDateLabel">Giriş Tarihi</label><input type="date" class="form-control" id="mekkeGiris" onchange="calculateNights()"></div><div class="col-md-4 mb-3"><label for="mekkeCikis" class="form-label" data-lang-key="checkoutDateLabel">Çıkış Tarihi</label><input type="date" class="form-control" id="mekkeCikis" onchange="calculateNights()"></div><div class="col-md-4 mb-3"><label for="mekkeGece" class="form-label" data-lang-key="nightsCountLabel">Gece Sayısı</label><input type="text" class="form-control" id="mekkeGece" readonly></div>
        </div><div id="mekkeInputs"></div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="visaCostTitle"><i class="bi bi-passport-fill"></i> Vize Maliyeti</h2>
        <div class="row"><div class="col-md-6" id="vizeInputs"></div></div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="transportCostTitle"><i class="bi bi-bus-front-fill"></i> Ulaşım Maliyetleri</h2>
        <p class="text-muted" data-lang-key="transportSubtitle">Toplam maliyet, belirtilen grup sayısına bölünecektir.</p><div id="ulasimInputs"></div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="notesTitle"><i class="bi bi-card-checklist"></i> Notlar</h2>
        <div class="mb-3"><label for="dahilHizmetlerNotu" class="form-label" data-lang-key="includedServicesLabel">Fiyata Dahil Olan Hizmetler</label><textarea class="form-control" id="dahilHizmetlerNotu" rows="10"></textarea></div>
    </section>
    <section class="mt-4">
        <h2 data-lang-key="profitMarginTitle"><i class="bi bi-graph-up-arrow"></i> Kar Marjı Ayarları (Raporda Gizli)</h2>
        <div class="p-3 border rounded">
            <div class="form-check"><input class="form-check-input" type="radio" name="profitType" id="profitTypePercentage" value="percentage" onchange="toggleProfitInputs()" checked><label class="form-check-label" for="profitTypePercentage" data-lang-key="percentageProfitLabel">Yüzdesel Kar Ekle</label></div><div class="input-group mt-2"><input type="number" class="form-control" id="karYuzdesi" placeholder="15"><span class="input-group-text">%</span></div><hr>
            <div class="form-check"><input class="form-check-input" type="radio" name="profitType" id="profitTypeFixed" value="fixed" onchange="toggleProfitInputs()"><label class="form-check-label" for="profitTypeFixed" data-lang-key="fixedProfitLabel">Kişi Başı Sabit Kar Ekle</label></div><div class="input-group mt-2"><input type="number" class="form-control" id="sabitKar" placeholder="500" disabled><select class="form-select" id="sabitKarCurrency" style="max-width:100px" disabled><option value="USD">USD</option><option value="SAR" selected>SAR</option><option value="EUR">EUR</option></select></div>
        </div>
    </section>
    <button id="calculateBtn" class="btn btn-primary w-100 btn-lg mt-4" onclick="createProposal()"><span class="btn-text" data-lang-key="createOfferBtn"><i class="bi bi-calculator-fill"></i> Teklif Oluştur</span></button>
    <div id="teklifCiktisi" class="mt-4" style="display:none;"></div>
    <div id="exportButtons" class="text-center mt-3" style="display: none;">
        <button id="exportPdfBtn" class="btn btn-danger me-2"><span data-lang-key="downloadPdfBtn"><i class="bi bi-file-earmark-pdf-fill"></i> PDF Olarak İndir</span></button>
        <button id="exportXlsxBtn" class="btn btn-success"><span data-lang-key="downloadXlsxBtn"><i class="bi bi-file-earmark-excel-fill"></i> Excel Olarak İndir</span></button>
    </div>
</div>
<footer class="signature">by - Ercan Belul</footer>
<script>
const translations = {
    tr: {
        pageTitle: "Umre & Hac Maliyet Hesaplayıcı", mainTitle: "Umre & Hac Maliyet Hesaplayıcı", mainSubtitle: "Fiyat teklifinizi kolayca oluşturun, PDF veya Excel olarak indirin.",
        generalInfoTitle: "Genel Bilgiler", companyNameLabel: "Firma Adı", companyNamePlaceholder: "Firma Adı", groupLeaderLabel: "Grup Lideri Adı", groupLeaderPlaceholder: "Grup Lideri", groupSizeLabel: "Grup Kişi Sayısı", groupSizePlaceholder: "40", offerStartDateLabel: "Teklif Başlangıç Tarihi", offerEndDateLabel: "Teklif Bitiş Tarihi", logoUploadLabel: "Firma Logosu Yükle (PDF için)",
        medinaHotelTitle: "Medine Otel Bilgileri", meccaHotelTitle: "Mekke Otel Bilgileri", hotelNameLabel: "Otel Adı", medinaHotelPlaceholder: "Medine Otel Adı", meccaHotelPlaceholder: "Mekke Otel Adı", checkinDateLabel: "Giriş Tarihi", checkoutDateLabel: "Çıkış Tarihi", nightsCountLabel: "Gece Sayısı", nightsUnit: "Gece", dblRoomPriceLabel: "DBL Günlük Oda Fiyatı", trplRoomPriceLabel: "TRPL Günlük Oda Fiyatı", quadRoomPriceLabel: "QUAD Günlük Oda Fiyatı", mealPriceLabel: "Kişi Başı Günlük Yemek Ücreti",
        visaCostTitle: "Vize Maliyeti", visaCostPerPersonLabel: "Vize Maliyeti (Kişi Başı)",
        transportCostTitle: "Ulaşım Maliyetleri", transportSubtitle: "Toplam maliyet, belirtilen grup sayısına bölünecektir.", vehicleCountLabel: "Araç Sayısı", costPerVehicleLabel: "Araç Başı Maliyet", capacityLabel: "Kapasite", capacityUnit: "Kişi",
        notesTitle: "Notlar", includedServicesLabel: "Fiyata Dahil Olan Hizmetler",
        profitMarginTitle: "Kar Marjı Ayarları (Raporda Gizli)", percentageProfitLabel: "Yüzdesel Kar Ekle", fixedProfitLabel: "Kişi Başı Sabit Kar Ekle",
        createOfferBtn: '<i class="bi bi-calculator-fill"></i> Teklif Oluştur', downloadPdfBtn: '<i class="bi bi-file-earmark-pdf-fill"></i> PDF Olarak İndir', downloadXlsxBtn: '<i class="bi bi-file-earmark-excel-fill"></i> Excel Olarak İndir',
        calculatingBtn: '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Hesaplama Yapılıyor...', recreateOfferBtn: '<i class="bi bi-calculator-fill"></i> Tekrar Teklif Oluştur',
        proposalTitle: "FİYAT TEKLİFİ", reportCompanyName: "Firma Adı:", reportGroupLeader: "Grup Lideri:", reportGroupSize: "Grup Kişi Sayısı:", reportValidity: "Geçerlilik Tarihi:",
        packageDetailsTitle: "Paket Detayları", packageNameLabel: "Paket Adı:", medinaLabel: "Medine:", meccaLabel: "Mekke:", transportLabel: "Ulaşım:",
        package_name_template: "{nights} Gece {days} Gün Umre Programı", not_specified: "Belirtilmedi",
        pricesTitle: "Kişi Başı Her Şey Dahil Fiyatlar", roomTypeHeader: "Oda Tipi", dblPriceLabel: "DBL Odada Kişi Başı", trplPriceLabel: "TRPL Odada Kişi Başı", quadPriceLabel: "QUAD Odada Kişi Başı",
        includedServicesTitle: "Fiyata Dahil Olan Hizmetler", currencyNote: "Not: Döviz kurları {date} itibarıyla anlık olarak alınmıştır.", offerFileName: "Teklif",
        defaultNotes: `1. Sabah kahvaltısı ve akşam yemeği\n2. Ulaşım (Mekke-i Mükerreme ve Medine-i Münevvere çevre ziyaretleri dâhildir. Havaalanından otellere ve Mekke–Medine arası transferleri kapsamaktadır.) Ayrıca vize masrafları da dâhildir.\n3. Operasyonel hizmetler (otel anahtar teslimi, karşılama ve uğurlama, otobüs takipleri, Medine-i Münevvere Ravza ziyaret takipleri, genel organizasyon koordinasyonu)\n4. İşlem takip hizmetleri (otel rezervasyonları, vize işlemleri, evrak süreçleri ve benzeri)\n---\nNOT: HİZMETLERİMİZE UÇAK ÜCRETİ DAHİL DEĞİLDİR.\n(TEKLİFİMİZ {startDate} - {endDate} TARİHLERİ ARASI GEÇERLİDİR.)`
    },
    en: {
        pageTitle: "Umrah & Hajj Cost Calculator", mainTitle: "Umrah & Hajj Cost Calculator", mainSubtitle: "Easily create your price quote, download as PDF or Excel.",
        generalInfoTitle: "General Information", companyNameLabel: "Company Name", companyNamePlaceholder: "Company Name", groupLeaderLabel: "Group Leader Name", groupLeaderPlaceholder: "Group Leader", groupSizeLabel: "Group Size", groupSizePlaceholder: "40", offerStartDateLabel: "Offer Start Date", offerEndDateLabel: "Offer End Date", logoUploadLabel: "Upload Company Logo (for PDF)",
        medinaHotelTitle: "Medina Hotel Information", meccaHotelTitle: "Mecca Hotel Information", hotelNameLabel: "Hotel Name", medinaHotelPlaceholder: "Medina Hotel Name", meccaHotelPlaceholder: "Mecca Hotel Name", checkinDateLabel: "Check-in Date", checkoutDateLabel: "Check-out Date", nightsCountLabel: "Number of Nights", nightsUnit: "Nights", dblRoomPriceLabel: "DBL Daily Room Price", trplRoomPriceLabel: "TRPL Daily Room Price", quadRoomPriceLabel: "QUAD Daily Room Price", mealPriceLabel: "Daily Meal Cost Per Person",
        visaCostTitle: "Visa Cost", visaCostPerPersonLabel: "Visa Cost (Per Person)",
        transportCostTitle: "Transportation Costs", transportSubtitle: "Total cost will be divided by the specified group size.", vehicleCountLabel: "Number of Vehicles", costPerVehicleLabel: "Cost Per Vehicle", capacityLabel: "Capacity", capacityUnit: "Persons",
        notesTitle: "Notes", includedServicesLabel: "Services Included in the Price",
        profitMarginTitle: "Profit Margin Settings (Hidden in Report)", percentageProfitLabel: "Add Percentage Profit", fixedProfitLabel: "Add Fixed Profit Per Person",
        createOfferBtn: '<i class="bi bi-calculator-fill"></i> Create Offer', downloadPdfBtn: '<i class="bi bi-file-earmark-pdf-fill"></i> Download as PDF', downloadXlsxBtn: '<i class="bi bi-file-earmark-excel-fill"></i> Download as Excel',
        calculatingBtn: '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Calculating...', recreateOfferBtn: '<i class="bi bi-calculator-fill"></i> Recreate Offer',
        proposalTitle: "PRICE QUOTATION", reportCompanyName: "Company Name:", reportGroupLeader: "Group Leader:", reportGroupSize: "Group Size:", reportValidity: "Validity Date:",
        packageDetailsTitle: "Package Details", packageNameLabel: "Package Name:", medinaLabel: "Medina:", meccaLabel: "Mecca:", transportLabel: "Transportation:",
        package_name_template: "{nights} Nights {days} Days Umrah Program", not_specified: "Not specified",
        pricesTitle: "All-Inclusive Prices Per Person", roomTypeHeader: "Room Type", dblPriceLabel: "Per Person in DBL Room", trplPriceLabel: "Per Person in TRPL Room", quadPriceLabel: "Per Person in QUAD Room",
        includedServicesTitle: "Services Included in Price", currencyNote: "Note: Exchange rates are taken live as of {date}.", offerFileName: "Quote",
        defaultNotes: `1. Breakfast and dinner\n2. Transportation (includes surrounding visits in Mecca and Medina. Covers transfers from the airport to hotels and between Mecca-Medina.) Visa costs are also included.\n3. Operational services (hotel key delivery, reception and farewell, bus tracking, Medina Rawdah visit tracking, general organization coordination)\n4. Process tracking services (hotel reservations, visa procedures, paperwork processes, etc.)\n---\nNOTE: FLIGHT TICKETS ARE NOT INCLUDED IN OUR SERVICES.\n(OUR OFFER IS VALID BETWEEN {startDate} - {endDate}.)`
    }
};
let currentLanguage = 'tr';
let uploadedLogoDataUrl = null;
function setLanguage(lang) {
    currentLanguage = lang;
    const langDict = translations[lang];
    document.documentElement.lang = lang;
    document.title = langDict.pageTitle;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (langDict[key]) el.innerHTML = langDict[key];
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.dataset.langPlaceholder;
        if (langDict[key]) el.placeholder = langDict[key];
    });
    document.getElementById('lang-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    recreateDynamicInputs();
    const startDate = document.getElementById('talepTarihi').value ? new Date(document.getElementById('talepTarihi').value).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB') : '...';
    const endDate = document.getElementById('talepBitisTarihi').value ? new Date(document.getElementById('talepBitisTarihi').value).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB') : '...';
    document.getElementById('dahilHizmetlerNotu').value = langDict.defaultNotes.replace('{startDate}', startDate).replace('{endDate}', endDate);
    const outputDiv = document.getElementById('teklifCiktisi');
    if (outputDiv.style.display === 'block') {
        outputDiv.style.display = 'none';
        document.getElementById('exportButtons').style.display = 'none';
        document.querySelector('#calculateBtn .btn-text').innerHTML = langDict.createOfferBtn;
    }
}
function recreateDynamicInputs() {
    const langDict = translations[currentLanguage];
    document.getElementById('medineInputs').innerHTML = `<div class="row">${createRoomPriceInput('medineDbl',langDict.dblRoomPriceLabel,'600')}${createRoomPriceInput('medineTrpl',langDict.trplRoomPriceLabel,'750')}${createRoomPriceInput('medineQuad',langDict.quadRoomPriceLabel,'800')}</div><div class="row">${createMealInput('medineYemek',langDict.mealPriceLabel,'50')}</div>`;
    document.getElementById('mekkeInputs').innerHTML = `<div class="row">${createRoomPriceInput('mekkeDbl',langDict.dblRoomPriceLabel,'800')}${createRoomPriceInput('mekkeTrpl',langDict.trplRoomPriceLabel,'950')}${createRoomPriceInput('mekkeQuad',langDict.quadRoomPriceLabel,'1000')}</div><div class="row">${createMealInput('mekkeYemek',langDict.mealPriceLabel,'60')}</div>`;
    document.getElementById('vizeInputs').innerHTML = createVisaInput('vize', langDict.visaCostPerPersonLabel, '550');
    let transportHTML = createTransportInput('bus', 'Otobüs / Bus', '50', '15000');
    transportHTML += createTransportInput('hiace', 'Hi-ace', '13', '7000');
    transportHTML += createTransportInput('gmc', 'GMC', '7', '9000');
    document.getElementById('ulasimInputs').innerHTML = transportHTML;
}
function createRoomPriceInput(id,label,p){return`<div class="col-md-4 mb-3"><label class="form-label">${label}</label><div class="input-group"><input type="number" class="form-control" id="${id}" placeholder="${p}"><select class="form-select" id="${id}Currency" style="max-width:100px"><option value="USD">USD</option><option value="SAR" selected>SAR</option><option value="EUR">EUR</option></select></div></div>`}
function createMealInput(id,label,p){return`<div class="col-md-12 mb-3"><label class="form-label">${label}</label><div class="input-group"><input type="number" class="form-control" id="${id}" placeholder="${p}"><select class="form-select" id="${id}Currency" style="max-width:100px"><option value="USD">USD</option><option value="SAR" selected>SAR</option><option value="EUR">EUR</option></select></div></div>`}
function createVisaInput(id,l,p){return`<div class="col-md-12 mb-3"><label class="form-label">${l}</label><div class="input-group"><input type="number" class="form-control" id="${id}" placeholder="${p}"><select class="form-select" id="${id}Currency" style="max-width:100px"><option value="USD">USD</option><option value="SAR" selected>SAR</option><option value="EUR">EUR</option></select></div></div>`}
function createTransportInput(id, label, capacity, placeholderCost){const langDict = translations[currentLanguage]; return`<div class="p-3 border rounded mb-3"><div class="form-check"><input class="form-check-input" type="radio" name="transportType" id="radio_${id}" value="${id}" ${id==='bus'?'checked':''}><label class="form-check-label h5" for="radio_${id}">${label}</label></div><div class="row mt-2 align-items-end"><div class="col-md-4 mb-3"><label class="form-label" data-lang-key="vehicleCountLabel">${langDict.vehicleCountLabel}</label><input type="number" class="form-control" id="${id}Count" placeholder="1" value="1"></div><div class="col-md-5 mb-3"><label class="form-label" data-lang-key="costPerVehicleLabel">${langDict.costPerVehicleLabel}</label><div class="input-group"><input type="number" class="form-control" id="${id}Cost" placeholder="${placeholderCost}"><select class="form-select" id="${id}CostCurrency" style="max-width:100px"><option value="USD">USD</option><option value="SAR" selected>SAR</option><option value="EUR">EUR</option></select></div></div><div class="col-md-3 mb-3"><p class="text-muted mb-1 small">${langDict.capacityLabel}: ~${capacity} ${langDict.capacityUnit}</p></div></div></div>`}
function toggleProfitInputs(){const isPercentage=document.getElementById('profitTypePercentage').checked;document.getElementById('karYuzdesi').disabled=!isPercentage;document.getElementById('sabitKar').disabled=isPercentage;document.getElementById('sabitKarCurrency').disabled=isPercentage}
document.addEventListener('DOMContentLoaded',()=>{document.getElementById('talepTarihi').valueAsDate=new Date();setLanguage('tr');toggleProfitInputs();document.getElementById('logoUpload').addEventListener('change',function(event){const file=event.target.files[0];if(file){const reader=new FileReader();reader.onload=function(e){uploadedLogoDataUrl=e.target.result;const preview=document.getElementById('logoPreview');preview.src=uploadedLogoDataUrl;preview.style.display='block'};reader.readAsDataURL(file)}})});
function calculateNights(){['medine','mekke'].forEach(c=>{const g=document.getElementById(`${c}Giris`).value;const k=document.getElementById(`${c}Cikis`).value;const n=document.getElementById(`${c}Gece`);if(g&&k){const d1=new Date(g);const d2=new Date(k);if(d2>d1){const t=Math.abs(d2-d1);const f=Math.ceil(t/(1e3*60*60*24));const nightText = translations[currentLanguage].nightsUnit;n.value=f>0?`${f} ${nightText}`:'';n.dataset.nights=f}else{n.value='';n.dataset.nights=0}}})}
async function fetchRates(){const defaultRates={USD_PER_SAR:0.266,EUR_PER_SAR:0.248,SAR_PER_USD:3.75,SAR_PER_EUR:4.03};try{const response=await fetch('https://api.frankfurter.app/latest?from=SAR&to=USD,EUR');if(!response.ok){throw new Error('API response not OK')}const data=await response.json();if(!data||!data.rates||!data.rates.USD||!data.rates.EUR){throw new Error('Invalid data from API')}const usdPerSar=data.rates.USD;const eurPerSar=data.rates.EUR;return{USD_PER_SAR:usdPerSar,SAR_PER_USD:1/usdPerSar,EUR_PER_SAR:eurPerSar,SAR_PER_EUR:1/eurPerSar}}catch(e){console.error("Anlık kurlar alınamadı, varsayılan değerler kullanılıyor:",e.message);return defaultRates}}
function getSarValue(id,rates){const amount=parseFloat(document.getElementById(id).value)||0;const currency=document.getElementById(id+'Currency').value;if(currency==='USD')return amount*rates.SAR_PER_USD;if(currency==='EUR')return amount*rates.SAR_PER_EUR;return amount}
async function createProposal(){
    const langDict = translations[currentLanguage];
    const calculateBtn=document.getElementById('calculateBtn');const btnText=calculateBtn.querySelector('.btn-text');calculateBtn.disabled=true;btnText.innerHTML=langDict.calculatingBtn;
    const rates=await fetchRates();const groupSize=parseInt(document.getElementById('grupKisiSayisi').value)||1;const medineNights=parseInt(document.getElementById('medineGece').dataset.nights)||0;const mekkeNights=parseInt(document.getElementById('mekkeGece').dataset.nights)||0;const totalNights=medineNights+mekkeNights;const totalDays=totalNights>0?totalNights+1:0;const otomatikPaketAdi=totalNights>0?langDict.package_name_template.replace('{nights}',totalNights).replace('{days}',totalDays):langDict.not_specified;
    const vizePerPersonSar=getSarValue('vize',rates);const transportType=document.querySelector('input[name="transportType"]:checked').value;const vehicleCount=parseInt(document.getElementById(transportType+'Count').value)||1;const costPerVehicleSar=getSarValue(transportType+'Cost',rates);const transportTotalCostSar=vehicleCount*costPerVehicleSar;const transportPerPersonSar=groupSize>0?transportTotalCostSar/groupSize:0;const medineYemekDailySar=getSarValue('medineYemek',rates);const mekkeYemekDailySar=getSarValue('mekkeYemek',rates);const totalYemekPerPersonSar=(medineYemekDailySar*medineNights)+(mekkeYemekDailySar*mekkeNights);const dailyRoomPricesSar={medine:{dbl:getSarValue('medineDbl',rates),trpl:getSarValue('medineTrpl',rates),quad:getSarValue('medineQuad',rates)},mekke:{dbl:getSarValue('mekkeDbl',rates),trpl:getSarValue('mekkeTrpl',rates),quad:getSarValue('mekkeQuad',rates)}};const profitType=document.querySelector('input[name="profitType"]:checked').value;let profitToAddPerPersonSar=0;if(profitType==='fixed'){profitToAddPerPersonSar=getSarValue('sabitKar',rates)}const totalsSar={};const roomTypes={dbl:2,trpl:3,quad:4};for(const type in roomTypes){const personsInRoom=roomTypes[type];const medineRoomCostPerPerson=medineNights>0?(dailyRoomPricesSar.medine[type]*medineNights)/personsInRoom:0;const mekkeRoomCostPerPerson=mekkeNights>0?(dailyRoomPricesSar.mekke[type]*mekkeNights)/personsInRoom:0;const costPerPersonBeforeProfit=medineRoomCostPerPerson+mekkeRoomCostPerPerson+totalYemekPerPersonSar+vizePerPersonSar+transportPerPersonSar;let currentProfit=0;if(profitType==='percentage'){const karYuzdesi=parseFloat(document.getElementById('karYuzdesi').value)||0;currentProfit=costPerPersonBeforeProfit*(karYuzdesi/100)}else{currentProfit=profitToAddPerPersonSar}totalsSar[type]=costPerPersonBeforeProfit+currentProfit}
    const locale = currentLanguage === 'tr' ? 'tr-TR' : 'en-US';
    const formatters={SAR:new Intl.NumberFormat('ar-SA',{style:'currency',currency:'SAR',maximumFractionDigits:0,numberingSystem:'latn'}),USD:new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}),EUR:new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0})};
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const talepTarihiFormatted=document.getElementById('talepTarihi').value?new Date(document.getElementById('talepTarihi').value).toLocaleDateString(locale, dateOptions):'N/A';
    const talepBitisTarihiFormatted=document.getElementById('talepBitisTarihi').value?new Date(document.getElementById('talepBitisTarihi').value).toLocaleDateString(locale, dateOptions):'N/A';
    const proposalData={paketAdi:otomatikPaketAdi,firmaAdi:document.getElementById('firmaAdi').value||'N/A',grupLideri:document.getElementById('grupLideri').value||'N/A',grupKisiSayisi:document.getElementById('grupKisiSayisi').value||'N/A',talepTarihi:talepTarihiFormatted,talepBitisTarihi:talepBitisTarihiFormatted,medineOtel:document.getElementById('medineOtelAdi').value||langDict.not_specified,mekkeOtel:document.getElementById('mekkeOtelAdi').value||langDict.not_specified,medineGece:document.getElementById('medineGece').value||'N/A',mekkeGece:document.getElementById('mekkeGece').value||'N/A',transportLabel:document.querySelector(`label[for="radio_${transportType}"]`).innerText,dahilHizmetler:document.getElementById('dahilHizmetlerNotu').value};
    const currentDate=new Date().toLocaleDateString(locale, dateOptions);
    const logoHtml=uploadedLogoDataUrl?`<img src="${uploadedLogoDataUrl}" alt="Company Logo" style="max-height: 80px; max-width: 200px;">`:'';
    const teklifHTML=`<div class="d-flex justify-content-between align-items-start mb-4"><div><h3 class="mb-4 text-primary">${langDict.proposalTitle}</h3><p class="mb-1"><strong>${langDict.reportCompanyName}</strong> ${proposalData.firmaAdi}</p><p><strong>${langDict.reportGroupLeader}</strong> ${proposalData.grupLideri}</p></div><div>${logoHtml}</div></div><div class="row mb-4"><div class="col-md-6"><p><strong>${langDict.reportGroupSize}</strong> ${proposalData.grupKisiSayisi}</p></div><div class="col-md-6 text-md-end"><p><strong>${langDict.reportValidity}</strong> ${proposalData.talepTarihi} - ${proposalData.talepBitisTarihi}</p></div></div><h4>${langDict.packageDetailsTitle}</h4><ul class="list-group list-group-flush mb-4"><li class="list-group-item"><strong>${langDict.packageNameLabel}</strong> ${proposalData.paketAdi}</li><li class="list-group-item"><strong>${langDict.medinaLabel}</strong> ${proposalData.medineOtel} (${proposalData.medineGece})</li><li class="list-group-item"><strong>${langDict.meccaLabel}</strong> ${proposalData.mekkeOtel} (${proposalData.mekkeGece})</li><li class="list-group-item"><strong>${langDict.transportLabel}</strong> ${proposalData.transportLabel} (${vehicleCount} adet)</li></ul><h4 class="mt-4">${langDict.pricesTitle}</h4><table class="table table-bordered table-striped text-center"><thead class="table-primary"><tr><th>${langDict.roomTypeHeader}</th><th>SAR (Riyal)</th><th>USD (Dolar)</th><th>EUR (Euro)</th></tr></thead><tbody><tr><td><strong>${langDict.dblPriceLabel}</strong></td><td>${formatters.SAR.format(totalsSar.dbl)}</td><td>${formatters.USD.format(totalsSar.dbl*rates.USD_PER_SAR)}</td><td>${formatters.EUR.format(totalsSar.dbl*rates.EUR_PER_SAR)}</td></tr><tr><td><strong>${langDict.trplPriceLabel}</strong></td><td>${formatters.SAR.format(totalsSar.trpl)}</td><td>${formatters.USD.format(totalsSar.trpl*rates.USD_PER_SAR)}</td><td>${formatters.EUR.format(totalsSar.trpl*rates.EUR_PER_SAR)}</td></tr><tr><td><strong>${langDict.quadPriceLabel}</strong></td><td>${formatters.SAR.format(totalsSar.quad)}</td><td>${formatters.USD.format(totalsSar.quad*rates.USD_PER_SAR)}</td><td>${formatters.EUR.format(totalsSar.quad*rates.EUR_PER_SAR)}</td></tr></tbody></table>${proposalData.dahilHizmetler?`<h5 class="mt-4">${langDict.includedServicesTitle}</h5><div class="text-muted small preserve-whitespace">${proposalData.dahilHizmetler}</div>`:''}<div class="text-muted small mt-4"><p>${langDict.currencyNote.replace('{date}', currentDate)}</p></div>`;
    const outputDiv=document.getElementById('teklifCiktisi');outputDiv.innerHTML=teklifHTML;outputDiv.style.display='block';document.getElementById('exportButtons').style.display='block';outputDiv.scrollIntoView({behavior:'smooth'});document.getElementById('exportPdfBtn').onclick=()=>exportToPdf(proposalData.grupLideri);document.getElementById('exportXlsxBtn').onclick=()=>exportToXlsx(proposalData,totalsSar,rates,vehicleCount);calculateBtn.disabled=false;btnText.innerHTML=langDict.recreateOfferBtn}
    function exportToPdf(grupLideriAdi) {
        const langDict = translations[currentLanguage];
        const reportElement = document.getElementById('teklifCiktisi');
        const safeFileName = (grupLideriAdi || langDict.offerFileName).replace(/ /g, '_') + '.pdf';
        html2canvas(reportElement, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width; 
            pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight);
            pdf.save(safeFileName); 
        });
    }
    function exportToXlsx(data, totals, rates, vehicleCount) {
        const langDict = translations[currentLanguage];
        const currentDate = new Date().toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-GB');
        const ws_data = [
            [langDict.proposalTitle], [],
            [langDict.reportCompanyName, data.firmaAdi],
            [langDict.reportGroupLeader, data.grupLideri],
            [langDict.offerStartDateLabel+":", data.talepTarihi],
            [langDict.offerEndDateLabel+":", data.talepBitisTarihi],
            [langDict.reportGroupSize, data.grupKisiSayisi],
            [langDict.packageNameLabel, data.paketAdi],
            [langDict.medinaLabel, `${data.medineOtel} (${data.medineGece})`],
            [langDict.meccaLabel, `${data.mekkeOtel} (${data.mekkeGece})`],
            [langDict.transportLabel, `${data.transportLabel} (${vehicleCount} adet)`], [],
            [langDict.pricesTitle.toUpperCase()],
            [langDict.roomTypeHeader, "SAR", "USD", "EUR"],
            [langDict.dblPriceLabel, totals.dbl, totals.dbl * rates.USD_PER_SAR, totals.dbl * rates.EUR_PER_SAR],
            [langDict.trplPriceLabel, totals.trpl, totals.trpl * rates.USD_PER_SAR, totals.trpl * rates.EUR_PER_SAR],
            [langDict.quadPriceLabel, totals.quad, totals.quad * rates.USD_PER_SAR, totals.quad * rates.EUR_PER_SAR], []
        ];
        if (data.dahilHizmetler) {
            ws_data.push([langDict.includedServicesTitle+":"], [data.dahilHizmetler], []);
        }
        ws_data.push([langDict.currencyNote.replace('{date}', currentDate)]);
        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        const priceRowStart = 14; 
        ws['!cols'] = [{ wch: 35 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
        for (let i = 0; i < 3; i++) {
            ['B', 'C', 'D'].forEach(col => {
                const cellRef = `${col}${priceRowStart + i}`;
                if (ws[cellRef]) {
                    ws[cellRef].t = 'n';
                    ws[cellRef].z = '#,##0.00';
                }
            });
        }
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, langDict.proposalTitle);
        const safeFileName = (data.grupLideri || langDict.offerFileName).replace(/ /g, '_') + '.xlsx';
        XLSX.writeFile(wb, safeFileName);
    }
</script>
</body>
</html>
