<script>
	import axios from 'axios';
    import { SuccessSvg, FailureSvg, WarningSvg, PendingSvg } from '$lib/components/icons/index';
	import { fileConfig } from '$lib/config';
</script>

<table class="table" id="fileLog">
    <thead>
        <tr>
            {#each fileConfig.tableCols as tableCol}
                <th class="{tableCol.width}">{tableCol.slug}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each fileConfig.tableData as data}
            <tr>
                <!-- <th class="text-start align-top place-content-start w-[20px] truncate">{data.id}</th> -->
                <td class="text-start align-top place-content-start">{data.title}</td>
                <td class="text-start align-top place-content-start">
                    <ul>
                        {#each data.files as file}
                            <li>{file}</li>
                        {/each}
                    </ul>
                </td>
                <td class="text-start align-top place-content-start">
                    {#if data.status == 'success'}
                        <SuccessSvg/>
                    {:else if data.status == 'pending'}
                        <PendingSvg/>
                    {:else if data.status == 'failed'}
                        <FailureSvg/>
                    {:else}
                        <WarningSvg/>
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>