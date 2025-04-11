import { SimpleLayout } from "@/components/SimpleLayout";



export default function ScoreSheets() {
    return (
        <SimpleLayout
            title="Score Sheets"
            intro="">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">KL2025</h2>
                    <a href="https://docs.google.com/spreadsheets/d/1YCoj-h8wJbMlC1OxHvSEwvXIOBtOXmz3/edit?usp=sharing&ouid=107971928372041626299&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Link to the 2025 KLHC score sheet results
                    </a>
                </div>
            </div>
        </SimpleLayout>
    )
}