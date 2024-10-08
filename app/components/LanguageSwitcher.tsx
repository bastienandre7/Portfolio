export default function LanguageSwitcher() {
    return (
        <div className="flex items-center pe-8">
            <select className="bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-slate-600 rounded-md p-2">
                <option value='fr'>Français</option>
                <option value='en'>English</option>
            </select>
        </div>
    );
}
